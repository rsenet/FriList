/* 
    Description: iOS Display App By Name
    Usage: frida -U --codeshare dki/find-ios-app-by-display-name Springboard
    Credit: dki
*/

'use strict';

function find(name) 
{
    var ws = ObjC.classes.LSApplicationWorkspace.defaultWorkspace();
    var apps = ws.allInstalledApplications();

    for (var i = 0; i < apps.count(); i++) 
    {
        var proxy = apps.objectAtIndex_(i);

        if (proxy.localizedName().toString() == name) 
        {
            var out = {};
            out["bundleIdentifier"] = proxy.bundleIdentifier().toString();
            out["bundleURL"] = proxy.bundleContainerURL().toString();
            out["dataURL"] = proxy.dataContainerURL().toString();
            out["executable"] = [proxy.bundleURL().toString(), proxy.bundleExecutable().toString()].join('/');
            return out;
        }
    }
}