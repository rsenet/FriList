/* 
    Description: iOS NSURLSession Observer
    Usage: frida -U -f XXX -l ios-nsurlsession-observer.js
    Credit: DuffyAPP-IT

    Link:
        https://developer.apple.com/documentation/foundation/nsurlsession
*/

if (ObjC.available) 
{
    console.log('Listening For Requests...');

    try 
    {
        var className = "NSURLSession";
        var funcName = "- dataTaskWithRequest:completionHandler:";

        var hook = eval('ObjC.classes.' + className + '["' + funcName + '"]');

        Interceptor.attach(hook.implementation, 
        {
            onEnter: function(args) 
            {
                console.log('REQUEST TYPE ->' + ObjC.Object(args[2]).HTTPMethod());
                console.log('URL -> ' + ObjC.Object(args[2]).URL())

                var httpbody_nsdata = ObjC.Object(args[2]).HTTPBody();
                var httpbody_nsstring = ObjC.classes.NSString.alloc().initWithData_encoding_(httpbody_nsdata, 4);
                var httpbody_nsheaders = ObjC.Object(args[2]).allHTTPHeaderFields();
                console.log('headers are' + httpbody_nsheaders);

                console.log('string is -> ' + httpbody_nsstring);

                if (httpbody_nsstring += null) 
                {
                    console.log("BODY -> " + httpbody_nsstring);
                } 
                else
                {
                    console.log("BODY EMPTY");
                }
            },
        });
    } 
    catch (error) 
    {
        console.log("[!] Exception: " + error.message);
    }
} 
else 
{
    console.log("Objective-C Runtime is not available!");
}