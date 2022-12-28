/* 
    Description: Android Anti-Frida/XPosed Bypass
    Usage: frida -U -f XXXX -l android-anti-frida-exposed-detection-bypass.js
    Credit: enovella
*/

Interceptor.attach(Module.findExportByName("libc.so", "strstr"), 
{
    onEnter: function(args)
    {
        this.haystack = args[0];
        this.needle = args[1];
        this.frida = Boolean(0);

        haystack = Memory.readUtf8String(this.haystack);
        needle = Memory.readUtf8String(this.needle);

        if (haystack.indexOf("frida") !== -1 || haystack.indexOf("xposed") !== -1) 
        {
            this.frida = Boolean(1);
        }
    },

    onLeave: function(retval) 
    {
        if (this.frida)
        {
            retval.replace(0);
        }
        return retval;
    }
});