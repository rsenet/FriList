/* 
    Description: iOS URL Scheme Dumper
    Usage: frida -U -f XXX -l ios-url-scheme-dumper.js
    Credit: @interference-security

    Link:
        https://developer.apple.com/documentation/uikit/uiapplication/1622961-openurl
*/

var openURL = ObjC.classes.UIApplication["- openURL:"];

Interceptor.attach(openURL.implementation, 
{
  onEnter: function(args) 
  {
    /* As this is an ObjectiveC method, the arguments are as follows:
        0. 'self'
        1. The selector (openURL:)
        2. The first argument to the openURL selector
    */

    var myNSURL = new ObjC.Object(args[2]);
    var myJSURL = myNSURL.absoluteString().toString();

    console.log("Launching URL: " + myJSURL);
    //send(myJSURL);
  }
});