/* 
    Description: Android List All Methods inside all classes
    Usage: frida -U -f XXX -l android-find-all-classes-methods.js
    Credit: @interference-security
*/

Java.perform(function() 
{
    Java.enumerateLoadedClasses(
    {
        onMatch: function(className) 
        {
            console.log("[*] Class Name: " + className);
            var db1 = Java.use(className);
            var methodArr = db1.class.getMethods();

            for(var m in methodArr)
            {
                console.log("\t" + methodArr[m]);
            }
        },
        onComplete: function() {}
    });
});