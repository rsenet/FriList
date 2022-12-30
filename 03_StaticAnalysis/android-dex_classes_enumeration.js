/* 
    Description: Android Dex Classes Enumeration
    Usage: frida -U -f XXX -l android-dex_classes_enumeration.js
    Credit: @mobilesecurity_

    Link:
        https://developer.android.com/reference/dalvik/system/DexFile
*/

Java.perform(function ()
{
    console.log("Dex Classes Enumeration - started")
    const ActivityThread = Java.use('android.app.ActivityThread');
    const DexFile = Java.use("dalvik.system.DexFile");

    var targetApp = ActivityThread.currentApplication();
    var context = targetApp.getApplicationContext();
    var apk_path = context.getPackageCodePath().toString()

    var df = DexFile.$new(apk_path);
    var dexClasses = df.entries()
    
    while (dexClasses.hasMoreElements()) 
    {
        console.log(String(dexClasses.nextElement()))
    }
    console.log("Dex Classes Enumeration - completed")
});