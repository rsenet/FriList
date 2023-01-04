/* 
    Description: Android List All Classes
    Usage: frida -U -f XXX -l android-find-all-classes.js
    Credit: @interference-security
*/

Java.perform(function() 
{
	Java.enumerateLoadedClasses(
	{
		onMatch: function(className) 
		{
			console.log(className);
		},
		
		onComplete: function() {}
	});
});