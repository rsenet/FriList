/* 
    Description: iOS NSLog Observer
    Usage: frida -U -f XXX -l ios-nslog-observer.js
    Credit: @interference-security

    Note: This interception does not print the string interpolation (or formatting) values such as %s, %ld, %f, %a. Still working on a fix.

    Links:
	    https://developer.apple.com/documentation/foundation/1395275-nslog
	    https://developer.apple.com/documentation/foundation/1395074-nslogv
*/

Interceptor.attach(Module.findExportByName("Foundation", "NSLog"), 
{
	onEnter: function(args) 
	{
		console.log("[*] NSLog was called")
		console.log(ObjC.Object(ptr(args[0])))
		//console.log((ObjC.Object(ptr(args[0]))).toString())
		//console.log((ObjC.Object(args[0])).toString())
	}
});

//As per the Apple documentation NSLog calls NSLogv in the background but for some reason it is not working. Still working on a fix.
Interceptor.attach(Module.findExportByName("Foundation", "NSLogv"), 
{
	onEnter: function(args) 
	{
		console.log("[*] NSLogv was called")
		console.log(ObjC.Object(ptr(args[0])))
	}
});
