/* 
    Description: Android Application Get Env information
    Usage: frida -U -f XXX -l android-get-app-env-info.js
    Credit: @mobilesecurity_ & rsenet
*/

setTimeout(function() 
{
    Java.perform(function() 
    {
        var context = null
        var ActivityThread = Java.use('android.app.ActivityThread');
        var targetApp = ActivityThread.currentApplication();

        if (targetApp != null) 
        {
            context = targetApp.getApplicationContext();

            var env = 
            {
                mainDirectory: context.getFilesDir().getParent(),
                filesDirectory: context.getFilesDir().getAbsolutePath().toString(),
                cacheDirectory: context.getCacheDir().getAbsolutePath().toString(),
                externalCacheDirectory: context.getExternalCacheDir().getAbsolutePath().toString(),
                codeCacheDirectory: 
                    'getCodeCacheDir' in context ? 
                    context.getCodeCacheDir().getAbsolutePath().toString() : 'N/A',
                obbDir: context.getObbDir().getAbsolutePath().toString(),
                packageCodePath: context.getPackageCodePath().toString(),
            };

            console.log("******************* App Environment Info *******************")
            console.log("mainDirectory: " + env.mainDirectory);
            console.log("filesDirectory: " + env.filesDirectory);
            console.log("cacheDirectory: " + env.cacheDirectory);
            console.log("externalCacheDirectory: " + env.externalCacheDirectory);
            console.log("codeCacheDirectory: " + env.codeCacheDirectory);
            console.log("obbDir: " + env.obbDir);
            console.log("packageCodePath: " + env.packageCodePath);
            console.log("************************************************************")
        } 
        else
            console.log("Error: App Environment Info - N/A")

    });
}, 5);