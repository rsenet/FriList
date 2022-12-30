/* 
    Description: iOS Application Get Env information
    Usage: frida -U -f XXX -l ios-get_app_env_info.js
    Credit: @mobilesecurity_
*/

const NSUserDomainMask = 1
const NSLibraryDirectory = 5
const NSDocumentDirectory = 9
const NSCachesDirectory = 13

var NSBundle = ObjC.classes.NSBundle.mainBundle()
var NSFileManager = ObjC.classes.NSFileManager.defaultManager();

function getPathForNSLocation (NSPath)
{
    var path=NSFileManager.URLsForDirectory_inDomains_(NSPath, NSUserDomainMask).lastObject();
    return path.path().toString();
}

var env = 
{
    mainDirectory: getPathForNSLocation(NSLibraryDirectory).replace("Library",""),
    BundlePath: NSBundle.bundlePath().toString(),
    CachesDirectory: getPathForNSLocation(NSCachesDirectory),
    DocumentDirectory: getPathForNSLocation(NSDocumentDirectory),
    LibraryDirectory: getPathForNSLocation(NSLibraryDirectory)
};

send("************************************** App Environment Info **************************************")
send("mainDirectory: "+env.mainDirectory);
send("BundlePath: "+env.BundlePath);
send("CachesDirectory: "+env.CachesDirectory);
send("DocumentDirectory: "+env.DocumentDirectory);
send("LibraryDirectory: "+env.LibraryDirectory);
send("**************************************************************************************************")