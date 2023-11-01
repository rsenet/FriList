/* 
    Description: Android Rootbeer Detection ByPass
    Usage: frida -U -f XXX -l android-rootbeer--flutter-bypass.js
    Credit: lpilorz
*/

console.log("Loading root_checker bypass...");

setImmediate(function() 
{
    Java.perform(function () 
    {
        var root = Java.use("com.neki.rootchecker.RootCheckerPlugin");

        root.isPathExist.overload('java.lang.String').implementation = function(x) 
        {
            return false;
        }
        
        root.isSUExist.overload().implementation = function() 
        {
            return false;
        }

        root.isTestBuildKey.overload().implementation = function() 
        {
            return false;
        }

        root.isHaveDangerousApps.overload().implementation = function() 
        {
            return false;
        }

        root.isHaveRootManagementApps.overload().implementation = function() 
        {
            return false;
        }

        root.isHaveDangerousProperties.overload().implementation = function() 
        {
            return false;
        }

        root.isHaveReadWritePermission.overload().implementation = function() 
        {
            return false;
        }
    });
});