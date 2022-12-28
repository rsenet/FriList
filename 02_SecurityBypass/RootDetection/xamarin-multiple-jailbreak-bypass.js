/* 
    Description: Xamarin Multiple Jailbreak Detection ByPass
    Usage: frida -U -f XXX -l xamarin-multiple-jailbreak-bypass.js
    Credit: Unknown 
*/

Interceptor.attach(Module.findExportByName(null, 'stat'), 
{
    onEnter: function(args) 
    {
        if (Java.available) 
        {
            var Log = Java.use("android.util.Log");
            var Exception = Java.use("java.lang.Exception");
            var paths = new Array(
                "/system/app/Superuser.apk",
                "/sbin/su",
                "/system/bin/su",
                "/system/xbin/su",
                "/data/local/xbin/su",
                "/data/local/bin/su",
                "/system/sd/xbin/su",
                "/system/bin/failsafe/su",
                "/data/local/su",
                "/su/bin/su"
            );

            var fpath_ptr = args[0]
            this.patch = false;

            if (fpath_ptr != null) 
            {
                //this.path = Memory.readUtf8String(mod_ref);
                this.path = Memory.readCString(fpath_ptr);

                if (isInArray(this.path, paths)) 
                {
                    console.log("Check for", this.path, "detected, tampering...");
                    this.patch = true;
                    //var e = Exception.$new();
                    //console.log(Log.getStackTraceString(e));
                }
                //this.path = mod_ref;

            } 
            else //null arg
                console.log("ERR: empty stat argument");
        }
    },

    onLeave: function(retval) 
    {
        if (Java.available) 
        {
            if (this.patch) 
            {
                console.log("Should be patched...", retval);
                retval.replace(0xffffffff);
                console.log("My patched...", retval);
            }
            //if(!retval.isNull() && this.path.indexOf("libmonosgen-2.0.so")!== -1 && !didHookApis) {
            //	didHookApis = true;
            //	console.log("File loaded hooking");
            //	hook_xamarin();
            //
            //}
        }
    }
});