/* 
    Description: Android OKHTTP Proxy Installator
    Usage: frida -U -f XXX -l android-okhttp-proxy-installator.js
    Credit: 0xbad0c0d3

    Link:
        https://square.github.io/okhttp/
*/

const proxy_ip = "192.168.X.X";
const proxy_port = 8888;

setTimeout(function() 
{
    Java.perform(function() 
    {
        console.log("# OkHTTP proxy");

        var OkHttpClient = Java.use("okhttp3.OkHttpClient");
        var OkHttpBuilder = Java.use("okhttp3.OkHttpClient$Builder");
        var Proxy = Java.use("java.net.Proxy");
        var ProxyType = Java.use("java.net.Proxy$Type");
        var InetSocketAddress = Java.use("java.net.InetSocketAddress");

        var proxy = Proxy.$new(ProxyType.HTTP.value, InetSocketAddress.createUnresolved(proxy_ip, proxy_port));

        OkHttpClient.newBuilder.overload().implementation = function() 
        {
            return OkHttpBuilder.$new();
        }

        OkHttpBuilder.build.overload().implementation = function() 
        {
            console.log('[+] Installing proxy');
            this.proxy(proxy);
            return this.build();
        }
    })
}, 0)