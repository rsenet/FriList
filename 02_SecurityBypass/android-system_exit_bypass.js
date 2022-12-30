/* 
    Description: Android System Exit ByPass
    Usage: frida -U -f XXX -l android-system_exit_bypass.js
    Credit: @mobilesecurity_

    Link:
        https://developer.android.com/reference/java/lang/System
*/

Java.perform(function () 
{
    const System = Java.use('java.lang.System')

    console.log("--> System.exit() Bypass - Script Loaded")

    System.exit.implementation = function()
    {
        console.log("System.exit() Bypassed!");
    }
});