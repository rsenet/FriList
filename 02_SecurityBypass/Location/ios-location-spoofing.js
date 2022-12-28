/* 
    Description: iOS GPS Location Spoofing
    Usage: frida -U -f XXXX -l ios-location-spoofing.js
    Credit: Divya Mudgal

	Link:
    	https://developer.apple.com/documentation/corelocation/cllocation
*/

function spoof_location(spoof_latitude, spoof_longitude)
{
	var hook_cllocation = ObjC.classes["CLLocation"]["- coordinate"]
	
	Interceptor.attach(hook_cllocation.implementation, {
		onLeave: function(return_value)
	  	{
			var spoofed_return_value = (new ObjC.Object(return_value)).initWithLatitude_longitude_(spoof_latitude, spoof_longitude)
			return_value.replace(spoofed_return_value)
	  	}
	});
}

spoof_location(10.0000000,10.0000000)