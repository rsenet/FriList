/* 
    Description: iOS Data Protection Display
    Usage: frida -U -f XXX -l ios-data-protection-display.js
    Credit: Unknown

    getDataProtectionKeysForAllPaths() - List iOS file data protection classes (NSFileProtectionKey) of an app
*/

function listDirectoryContentsAtPath(path) 
{
    var fileManager = ObjC.classes.NSFileManager.defaultManager();
    var enumerator = fileManager.enumeratorAtPath_(path);
    var file;
    var paths = [];

    while ((file = enumerator.nextObject()) !== null) 
    {
        paths.push(path + '/' + file);
    }

    return paths;
}

function listHomeDirectoryContents() 
{
    var homePath = ObjC.classes.NSProcessInfo.processInfo().environment().objectForKey_("HOME").toString();
    var paths = listDirectoryContentsAtPath(homePath);
    return paths;
}

function getDataProtectionKeyForPath(path) 
{
    var fileManager = ObjC.classes.NSFileManager.defaultManager();
    var urlPath = ObjC.classes.NSURL.fileURLWithPath_(path);
    var fileProtectionKey = ObjC.Object(ptr(fileManager.attributesOfItemAtPath_error_(urlPath.path(), NULL)));
    return fileProtectionKey.valueForKey_("NSFileProtectionKey").UTF8String();
}

function getDataProtectionKeysForAllPaths() 
{
    var fileManager = ObjC.classes.NSFileManager.defaultManager();
    var dict = [];
    var paths = listHomeDirectoryContents();

    var isDir = Memory.alloc(Process.pointerSize);
    Memory.writePointer(isDir, NULL);

    for (var i = 0; i < paths.length; i++) 
    {

        fileManager.fileExistsAtPath_isDirectory_(paths[i], isDir);

        if (Memory.readPointer(isDir) == 0) 
        {
            dict.push({
                path: paths[i],
                fileProtectionKey: getDataProtectionKeyForPath(paths[i])
            });
        }
    }
    return dict;
}