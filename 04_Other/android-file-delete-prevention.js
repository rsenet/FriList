/* 
    Description: Android File Delete Prevention
    Usage: frida -U -f XXX -l android-file-delete-prevention.js
    Credit: Unknown
*/

Java.perform(function() 
{
    Interceptor.attach
    (
        Module.findExportByName("libc.so", "unlink"), 
        {
            onEnter: function(args) 
            {
                const fileName = Memory.readUtf8String(args[0])
                console.log("Unlink Got Called for file "+fileName);

                if(fileName.indexOf("/files/upload/")!=-1)
                {
                    console.log("I WIll not let you delete any files at this path");
                    Memory.writeUtf8String(args[0], '/invalid/path');
                }
            },
            onLeave: function(ret) {

            }
        }
    );
});