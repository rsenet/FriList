/* 
    Description: Android Library Observer
    Usage: frida -U -f XXX -l android-library-observer.js
    Credit: @jeanbmar

    Links:
        https://developer.android.com/reference/java/lang/System
        https://developer.android.com/reference/java/lang/Runtime
*/

Java.perform(function() 
{
    const System = Java.use('java.lang.System');
    const Runtime = Java.use('java.lang.Runtime');
    const SystemLoad_2 = System.loadLibrary.overload('java.lang.String');
    const VMStack = Java.use('dalvik.system.VMStack');

    SystemLoad_2.implementation = function(library) 
    {
        send("Loading Dynamic Library => " + library);

        try 
        {
            const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), library);

            if(library === 'myLib') 
            {
                //do my stuff
            }

            return loaded;
        } 
        catch(ex) 
        {
            console.log(ex);
        }
    };
});