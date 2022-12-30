/* 
    Description: Android Crypto observer
    Usage: frida -U -f XXX -l android-crypto-observer.js
    Credit: roxanagogonea

    Links:
		https://developer.android.com/reference/javax/crypto/KeyGenerator
		https://developer.android.com/reference/java/security/KeyPairGenerator
		https://developer.android.com/reference/java/security/MessageDigest
		https://developer.android.com/reference/javax/crypto/SecretKeyFactory
		https://developer.android.com/reference/java/security/Signature
		https://developer.android.com/reference/javax/crypto/Cipher
		https://developer.android.com/reference/javax/crypto/Mac
*/

setImmediate(function() 
{
	Java.perform(function() 
	{
		var keyGenerator = Java.use("javax.crypto.KeyGenerator");
		keyGenerator.generateKey.implementation = function () 
		{
			console.log("[*] Generate symmetric key called. ");
			return this.generateKey();
		};

		keyGenerator.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] KeyGenerator.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		keyGenerator.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] KeyGenerator.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		keyGenerator.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] KeyGenerator.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var keyPairGenerator = Java.use("java.security.KeyPairGenerator");
		keyPairGenerator.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] GetPairGenerator.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		keyPairGenerator.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] GetPairGenerator.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		keyPairGenerator.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] GetPairGenerator.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var messageDigest = Java.use("java.security.MessageDigest");
		messageDigest.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] MessageDigest.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		messageDigest.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] MessageDigest.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		messageDigest.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] MessageDigest.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var secretKeyFactory = Java.use("javax.crypto.SecretKeyFactory");
		secretKeyFactory.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] SecretKeyFactory.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		secretKeyFactory.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] SecretKeyFactory.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		secretKeyFactory.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] SecretKeyFactory.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var signature = Java.use("java.security.Signature");
		signature.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] Signature.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		signature.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] Signature.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		signature.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] Signature.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var cipher = Java.use("javax.crypto.Cipher");
		cipher.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] Cipher.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		cipher.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] Cipher.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		cipher.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] Cipher.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		var mac = Java.use("javax.crypto.Mac");
		mac.getInstance.overload('java.lang.String').implementation = function (var0) 
		{
			console.log("[*] Mac.getInstance called with algorithm: " + var0 + "\n");
			return this.getInstance(var0);
		};

		mac.getInstance.overload('java.lang.String', 'java.lang.String').implementation = function (var0, var1) 
		{
			console.log("[*] Mac.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};

		mac.getInstance.overload('java.lang.String', 'java.security.Provider').implementation = function (var0, var1) 
		{
			console.log("[*] Mac.getInstance called with algorithm: " + var0 + " and provider: " + var1 + "\n");
			return this.getInstance(var0, var1);
		};
	});
});