/* 
    Description: iOS List All Classes
    Usage: frida -U -f XXX -l ios-find-all-classes.js
    Credit: @interference-security
*/

function run_show_classes_of_app()
{
    console.log("[*] Started: Find Classes")

    var count = 0

    for (var className in ObjC.classes)
    {
        if (ObjC.classes.hasOwnProperty(className))
        {
            console.log(className);
            count = count + 1
        }
    }

    console.log("\n[*] Classes found: " + count);
    console.log("[*] Completed: Find Classes")
}

function show_classes_of_app()
{
	setImmediate(run_show_classes_of_app)
}

show_classes_of_app()
