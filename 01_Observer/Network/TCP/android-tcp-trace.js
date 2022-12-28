/* 
    Description: Android TCP trace connections
    Usage: frida -U -f XXX -l android-tcp-trace.js
    Credit: mame82

    Note: the code is a modified excerpt of an agent written in TypeScript. This version is pure JS but may require
    some "performance rework" on the generated message objects
*/

function hookNativeSocket() 
{
    const tcpSocketFDs = new Map()
    const fSocketConnect = Module.getExportByName("libc.so", "connect")

    Interceptor.attach(fSocketConnect, 
    {
        onEnter(args) 
        {
            this.sockFd = args[0].toInt32()
        },

        onLeave(res) 
        {
            const sockFd = this.sockFd
            const sockType = Socket.type(sockFd)
            if (!(sockType === "tcp6" || sockType === "tcp")) return

            const sockLocal = Socket.localAddress(sockFd)
            const tcpEpLocal = sockLocal && sockLocal.ip ? sockLocal : undefined
            const sockRemote = Socket.peerAddress(sockFd)
            const tcpEpRemote = sockRemote && sockRemote.ip ? sockRemote : undefined

            if (!tcpEpLocal) return
            // ToDo: if socket FD already exists in the set, a faked 'close' message shall be sent first (currently handled by receiving logic)
            tcpSocketFDs.set(sockFd, tcpEpLocal)

            let msg = {
                socketFd: sockFd,
                pid: Process.id,
                threadId: this.threadId,
                socketEventType: "connect",
                type: "socketCall",
                result: res
            }

            if (tcpEpLocal) 
            {
                msg.hostip = tcpEpLocal.ip
                msg.port = tcpEpLocal.port
            }

            if (tcpEpRemote) 
            {
                msg.dstIp = tcpEpRemote.ip
                msg.dstPort = tcpEpRemote.port
            }

            //if (Java.available) {     // checks presence of Java runtime in process
            if (Java.vm !== null && Java.vm.tryGetEnv() !== null) 
            {
                // checks if Thread is JVM attached (JNI env available)
                let java_lang_Exception = Java.use("java.lang.Exception")
                var exception = java_lang_Exception.$new()
                const trace = exception.getStackTrace()
                msg.stack = trace.map(traceEl => 
                {
                    return 
                    {
                        class: traceEl.getClassName(),
                        file: traceEl.getFileName(),
                        line: traceEl.getLineNumber(),
                        method: traceEl.getMethodName(),
                        isNative: traceEl.isNativeMethod(),
                        str: traceEl.toString()
                    }
                })
            }

            //send(msg)
            console.log(JSON.stringify(msg, null, 4))
        }
    })

    const libcEx = Process.getModuleByName("libc.so").enumerateExports()
    const socketExports = libcEx.filter(
    expDetails =>
      expDetails.type === "function" &&
      ["shutdown", "close"].some(serachStr => serachStr === expDetails.name)
    )

    socketExports.forEach(exp => 
    {
        Interceptor.attach(exp.address, 
        {
            onEnter(args) 
            {
                const sockFd = args[0].toInt32()
                if (!tcpSocketFDs.has(sockFd)) return
                const sockType = Socket.type(sockFd)

                if (tcpSocketFDs.has(sockFd)) 
                {
                    const tcpEP = tcpSocketFDs.get(sockFd)
                    const msg = {
                        socketFd: sockFd,
                        pid: Process.id,
                        threadId: this.threadId,
                        socketEventType: exp.name,
                        hostip: tcpEP.ip,
                        port: tcpEP.port,
                        type: "socketCall"
                    }

                    tcpSocketFDs.delete(sockFd)
                    //send(msg)
                    console.log(JSON.stringify(msg, null, 4))
                }
            }
        })
    })
}

hookNativeSocket()
