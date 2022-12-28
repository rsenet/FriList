/* 
    Description: iOS TLS Packet Observer (iOS 14.*)
    Usage: frida -U -f XXX -l android-tcp-trace.js
    Credit: Andy Davies, @andydavies

    Offset of keylog_callback pointer in SSL struct

    Derived from dissassembly of ssl_log_secret in ssl_lib.c on iOS 12.4.3

    0000000181d4e214         sub        sp, sp, #0x60
    0000000181d4e218         stp        x22, x21, [sp, #0x30]
    0000000181d4e21c         stp        x20, x19, [sp, #0x40]
    0000000181d4e220         stp        x29, x30, [sp, #0x50]
    0000000181d4e224         add        x29, sp, #0x50
    0000000181d4e228         ldr        x8, [x0, #0x68]
    0000000181d4e22c         ldr        x8, [x8, #0x2a8]         ; Offset of keylog_callback pointer
    0000000181d4e230         cbz        x8, loc_181d4e338
 */

var CALLBACK_OFFSET = 0x2b8; // iOS 14.x offset

// Logging function, reads null terminated string from address in line
function key_logger(ssl, line) {
    console.log(new NativePointer(line).readCString());
}

// Wrap key_logger JS function in NativeCallback
var key_log_callback = new NativeCallback(key_logger, 'void', ['pointer', 'pointer']);

/*
 * SSL_CTX_set_keylog_callback isn't implemented in iOS version of boringssl
 *
 * Hook SSL_CTX_set_info_callback as it can access SSL_CTX and 
 * directly set SSL_CTX->keylog_callback to address of logging callback above
 */
var SSL_CTX_set_info_callback = Module.findExportByName("libboringssl.dylib", "SSL_CTX_set_info_callback");

Interceptor.attach(SSL_CTX_set_info_callback, {
    onEnter: function (args) {
        var ssl = new NativePointer(args[0]);
        var callback = new NativePointer(ssl).add(CALLBACK_OFFSET);

        callback.writePointer(key_log_callback);
    }
});