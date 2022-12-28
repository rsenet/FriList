/* 
    Description: Android Enable Webview Debug frida script
    Usage: frida -U -f XXXX -l android-enable-webview-debug.js
    Credit: raphc43

    Link:
        https://developer.android.com/reference/android/webkit/WebView#setWebContentsDebuggingEnabled(boolean)
*/

if (Java.available)
{
    Java.perform(function() 
    {
        Java.scheduleOnMainThread(function() 
        {
            var WebView = Java.use("android.webkit.WebView");
            console.log(WebView);

            WebView.setWebContentsDebuggingEnabled(true);
            console.log("WebView debug enabled successfully!");
        });
    });
}