/* 
    Description: Android OKHTTP HTTP/HTTPS requests and responses logger
    Usage: frida -U -f XXX -l android-okhttp-logger2.js --no-pause
    Credit: nneonneo

    Link:
        https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor
*/

Java.perform(function() 
{
    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
    var RealCall = Java.use("okhttp3.RealCall");
    var Buffer = Java.use("okio.Buffer");
    var StandardCharsets = Java.use("java.nio.charset.StandardCharsets");

    RealCall.getResponseWithInterceptorChain.implementation = function() 
    {
        var response = this.getResponseWithInterceptorChain()
        var request = response.request()
        console.log("REQUEST:", request)
        console.log(request.headers())
        var body = "";

        if (request.headers().get("content-type") === "application/x-www-form-urlencoded") 
        {
            var buffer = Buffer.$new()
            request.body().writeTo(buffer)
            body = buffer.readString(StandardCharsets.UTF_8.value)
        }
        
        console.log(body)
        console.log("RESPONSE:", response)
        console.log(response.headers())
        return response
    }
    console.log("okhttp3 intercepted")
});