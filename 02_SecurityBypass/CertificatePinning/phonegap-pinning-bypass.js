/* 
    Description: PhoneGap SSLCertificateChecker Bypass
    Usage: frida -U -f XXX -l phonegap-pinning-bypass.js
    Credit: gchib297
*/

Java.perform(function x() 
{
    var SSLCertificateChecker = Java.use("nl.xservices.plugins.SSLCertificateChecker");

    SSLCertificateChecker.execute.implementation = function(str, jSONArray, callbackContext)
    {
        Java.choose("org.apache.cordova.CallbackContext", 
        {
            onMatch: function(instance) 
            {
                console.log("Found instance: " + instance);
                console.log("Sending success");
                instance.success('CONNECTION_SECURE');
            },
            onComplete: function() {}
        });

        //var ret = this.execute(str, jSONArray, callbackContext); // Return value before modification
        var ret = true
        return ret;
    };
});