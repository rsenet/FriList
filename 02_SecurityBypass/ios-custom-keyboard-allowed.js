/* 
    Description: iOS Custom Keyboard Support
    Usage: frida -U -f XXXX -l ios-custom-keyboard-allowed.js
    Credit: ay-kay
*/

function areThirdPartyKeyboardsAllowed() 
{
    var UIApplication = ObjC.classes.UIApplication.sharedApplication();
    var shouldAllowKeyboardExtension = true;
    var isDelegateImplemented = false;

    try 
    {
        shouldAllowKeyboardExtension = UIApplication.delegate().application_shouldAllowExtensionPointIdentifier_(UIApplication, "com.apple.keyboard-service");
        isDelegateImplemented = true;
        console.log("App delegate implements application:shouldAllowExtensionPointIdentifier:");
    }
    catch (e) 
    {
        if (e instanceof TypeError)
        {
            console.log("App delegate has no application:shouldAllowExtensionPointIdentifier:, default behaviour applies:");
        }
    }

    if (shouldAllowKeyboardExtension) 
    {
        console.log("-> Third-party keyboards are allowed.")
    } 
    else 
    {
        console.log("-> Third-party keyboards are NOT allowed.")
    }

    if (shouldAllowKeyboardExtension && isDelegateImplemented) 
    {
        console.log("\nNote: App delegate is implemented but is configured to allow third-party keyboards.");
        console.log("      Review the implementation to check if third-party keyboard support is configurable.");
    }
}