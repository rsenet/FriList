/* 
    Description: Android Proxy Add
    Usage: frida -U -f XXXX -l android_proxy-add.js
    Credit: iddoeldor

    Links:
        https://developer.android.com/reference/android/net/ConnectivityManager
        https://developer.android.com/reference/android/net/ProxyInfo
*/

const proxy_ip   = '192.168.1.10';
const proxy_port = 8080;

Java.perform(function() 
{
    var ActivityThread      = Java.use('android.app.ActivityThread');
    var ConnectivityManager = Java.use('android.net.ConnectivityManager');
    var ProxyInfo           = Java.use('android.net.ProxyInfo');

    send("Configuring Proxy (" + proxy_ip + ":" + proxy_port + ")";
    var proxyInfo           = ProxyInfo.$new(proxy_ip, proxy_port, ''); // change to null in order to disable the proxy.
    var context             = ActivityThread.currentApplication().getApplicationContext();
    var connectivityManager = Java.cast(context.getSystemService('connectivity'), ConnectivityManager);
    connectivityManager.setGlobalProxy(proxyInfo);
});
