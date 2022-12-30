/* 
    Description: iOS PList file Observer
    Usage: frida -U -f XXX -l ios-read-plist-file.js
    Credit: @interference-security

    Link:
        https://developer.apple.com/documentation/foundation/nsmutabledictionary
*/

function read_plist_file(file_location)
{
	var dict = ObjC.classes.NSMutableDictionary
	console.log("[*] Read Plist File: " + file_location)
	console.log("[*] File Contents:")
	console.log(dict.alloc().initWithContentsOfFile_(file_location).toString())
}

read_plist_file("/path/to/file/filename.plist")
