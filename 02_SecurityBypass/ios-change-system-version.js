/* 
    Description: iOS System Version changer frida script
    Usage: frida -U -f XXXX -l ios-change-system-version.js
    Credit: rsenet

    https://developer.apple.com/documentation/uikit/uidevice/1620043-systemversion
*/

if (ObjC.available) 
{
    try
    {
        var desiredVersion = "16.0";
        var className = "UIDevice";
        var funcName = "- systemVersion";

        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

        Interceptor.attach(hook.implementation, 
        {
            onLeave: function(returnvalue) 
            {
                // Display
                console.log('Return Value Object (Original): ' + typeof returnvalue + ' | value: ' + returnvalue);
                console.log('Intial System Version: ' + ObjC.Object(returnvalue).toString());
                //console.log(ObjC.Object(returnvalue).$className) 

                // Change value
                var new_version  = ObjC.classes.NSString.stringWithString_(desiredVersion);
                returnvalue.replace(new_version)

                // New display
                console.log('New System Version: ' + ObjC.Object(new_version).toString());
                console.log("")
            }
        });
    }
    catch(error) 
    {
        console.log("[!] Exception: " + error.message); 
    }
}
else 
{
    console.log("Objective-C Runtime is not available!"); 
}