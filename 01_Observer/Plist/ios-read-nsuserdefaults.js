/* 
    Description: iOS NSUserDefaults Observer
    Usage: frida -U -f XXX -l ios-read-nsuserdefaults.js
    Credit: @interference-security

    Link:
        https://developer.apple.com/documentation/foundation/nsuserdefaults
*/

if (ObjC.available)
{
    console.warn("[*] Started: Read NSUserDefaults PLIST file");

    try
    {
        var NSUserDefaults = ObjC.classes.NSUserDefaults;
        var NSDictionary = NSUserDefaults.alloc().init().dictionaryRepresentation();
        console.log(NSDictionary.toString())
    }
    catch(err)
    {
        console.warn("[!] Exception: " + err.message);
    }
}
else
{
    console.warn("Objective-C Runtime is not available!");
}

console.warn("[*] Completed: Read NSUserDefaults PLIST file");
