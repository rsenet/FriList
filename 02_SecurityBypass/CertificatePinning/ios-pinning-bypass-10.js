/* 
    Description: iOS Certificate Pinning ByPass on iOS 10
    Usage: frida -U -f XXX -l ios-pinning-bypass-10.js
    Credit: dki

    Link:
        https://github.com/nabla-c0d3/ssl-kill-switch2/blob/master/SSLKillSwitch/SSLKillSwitch.m for iOS 10/11
*/

var tls_helper_create_peer_trust = new NativeFunction(
    Module.findExportByName(null, "tls_helper_create_peer_trust"),
    'int', ['pointer', 'bool', 'pointer']
    );

var errSecSuccess = 0;

Interceptor.replace(tls_helper_create_peer_trust, new NativeCallback(function(hdsk, server, trustRef) {
    return errSecSuccess;
}, 'int', ['pointer', 'bool', 'pointer']));
console.log("SSL certificate validation bypass active");