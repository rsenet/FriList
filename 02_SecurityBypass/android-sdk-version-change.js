/* 
    Description: Android SDK version changer frida script
    Usage: frida -U -f XXXX -l android-sdk-version-change.js
    Credit: Unknown

    https://developer.android.com/reference/android/os/Build.VERSION
*/

Java.perform(function() 
{
      var ver = Java.use('android.os.Build$VERSION');
      ver.SDK_INT.value = 15;
});