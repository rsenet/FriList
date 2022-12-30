/* 
    Description: Android isDebuggerConnected Bypass frida script
    Usage: frida -U -f XXXX -l android-debug-bypass.js
    Credit: Raphkitue

    Link:
        https://developer.android.com/reference/android/os/Debug#isDebuggerConnected()
*/

setTimeout(function() 
{
    Java.perform(function() 
    {
        var Debug = Java.use('android.os.Debug');
        Debug.isDebuggerConnected.implementation = function() 
        {
            console.log('isDebuggerConnected Bypassed !');
            return false;
        }
    });
}, 0);