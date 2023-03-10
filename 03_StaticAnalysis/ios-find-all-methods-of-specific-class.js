/* 
    Description: iOS List All Methods of a Particular Class
    Usage: frida -U -f XXX -l ios-find-all-methods-of-specific-class.js
    Credit: @interference-security
*/

function run_show_functions_of_specific_class(className_arg)
{
    console.log("\n[*] Started: Find All Methods of a Specific Class");
	console.log("\n[+] Class Name: " + className_arg);
    var count = 0;
    //var methods = ObjC.classes[className_arg].$methods;
	var methods = ObjC.classes[className_arg].$ownMethods;
    for (var i = 0; i < methods.length; i++)
    {
        console.log("\t[-] "+methods[i]);
        count = count + 1;
    }
    console.log("\n[*] Functions Found:" + count);
    console.log("[*] Completed: Find All Methods of a Specific Class");
}

function show_functions_of_specific_class(className_arg)
{
	setImmediate(run_show_functions_of_specific_class,[className_arg])
}

//Your class name goes here
show_functions_of_specific_class("YOUR_CLASS_NAME_HERE")
