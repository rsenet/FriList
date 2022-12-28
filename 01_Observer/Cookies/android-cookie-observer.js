/* 
    Description: Android Webview Cookie Observer
    Usage: frida -U -f XXX -l android-cookie-observer.js
    Credit: h1code2

    Link:
        https://developer.android.com/reference/android/webkit/CookieManager
*/

Java.perform(function()
{
    var listJava = Java.use("java.util.List");
    var CookieManager = Java.use("java.net.CookieManager");

    CookieManager.getCookieStore.implementation = function() 
    {
        try
        {
            ue_tool.showUETMenu();
        }
        catch(e)
        {
            console.log(e)
        }

        console.log("getCookieStore ============= start");
        var ret = this.getCookieStore();
        var cookieList = ret.getCookies();
        var cookies = Java.cast(cookieList, listJava);

        console.log("ret:", cookies.size());
        var cookieStr = "";

        for (var i = 0; i < cookies.size(); i++) 
        {
            cookieStr += cookies.get(i).toString() + ";"
        }

        console.log("Cookie:\n", decodeURIComponent(cookieStr.trim()));
        console.log("getCookieStore ============= end");

        return ret;
    }
});