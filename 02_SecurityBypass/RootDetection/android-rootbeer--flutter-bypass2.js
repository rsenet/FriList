/* 
    Description: Android Rootbeer Detection ByPass
    Usage: frida -U -f XXX -l android-rootbeer--flutter-bypass2.js
    Credit: lpilorz
*/

cconsole.log("Loading flutter_jailbreak_detection bypass...");

setImmediate(function() 
{
    Java.perform(function () 
    {
        var root = Java.use("com.scottyab.rootbeer.RootBeer");

        root.isRooted.overload().implementation = function() 
        {
            console.log("isRooted() called, returning false");
            return false;
        }
    });
});