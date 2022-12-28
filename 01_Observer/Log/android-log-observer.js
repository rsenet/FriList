/* 
    Description: Android Log Observer
    Usage: frida -U -f XXX -l android-log-observer.js
    Credit: @interference-security

    Link:
        https://developer.android.com/reference/android/util/Log
*/

Java.perform(function() 
{
	var logger = Java.use("android.util.Log");
	
	//isLoggable
	logger.isLoggable.overload("java.lang.String", "int").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " isLoggable was called:")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	//DEBUG
	logger.d.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " DEBUG (d):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.d.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " DEBUG (d):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}

	//ERROR
	logger.e.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " ERROR (e):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.e.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " ERROR (e):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}

	//INFO
	logger.i.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " INFO (i):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.i.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " INFO (i):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}

	//VERBOSE
	logger.v.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " VERBOSE (v):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.v.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " VERBOSE (v):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}

	//WARNING
	logger.w.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.w.overload("java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2) {
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.w.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WARNING (w):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}

	//What a Terrible Failure (WTF)
	logger.wtf.overload("java.lang.String", "java.lang.String").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.wtf.overload("java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		return true;
	}

	logger.wtf.overload("java.lang.String", "java.lang.String", "java.lang.Throwable").implementation = function (arg1, arg2, arg3) 
	{
		var today = new Date()
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
		console.log("[*] " + time + " WTF (wtf):")
		console.log("\targ1 : " + arg1.toString())
		console.log("\targ2 : " + arg2.toString())
		console.log("\targ3 : " + arg3.toString())
		return true;
	}
});