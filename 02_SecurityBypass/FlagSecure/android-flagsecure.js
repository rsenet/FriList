/* 
    Description: Android FLAG_SECURE Bypass frida script
    Usage: frida -U -f XXXX -l android-flagsecure.js
    Credit: su-vikas

    Links:
        https://developer.android.com/reference/android/view/SurfaceView
        https://developer.android.com/reference/android/view/Window
*/

Java.perform(function() 
{
    var surface_view = Java.use('android.view.SurfaceView');
    var set_secure = surface_view.setSecure.overload('boolean');

    set_secure.implementation = function(flag)
    {
        console.log("setSecure() flag called with args: " + flag); 
        set_secure.call(false);
    };

    var window = Java.use('android.view.Window');
    var set_flags = window.setFlags.overload('int', 'int');
    var layout_params = Java.use('android.view.WindowManager$LayoutParams');

    set_flags.implementation = function(flags, mask)
    {
        console.log("flag secure: " + layout_params.FLAG_SECURE.value);

        console.log("before setflags called  flags:  "+ flags);
        flags =(flags.value & ~layout_params.FLAG_SECURE.value);
        console.log("after setflags called  flags:  "+ flags);

        set_flags.call(this, flags, mask);
    };
});