/* 
    Description: Android Random Data Observer
    Usage: frida -U -f XXX -l android-random-observer.js
    Credit: @roxanagogonea

    Link:
        https://developer.android.com/reference/java/util/Random
*/

setImmediate(function() 
{
	Java.perform(function() 
	{
		var random = Java.use("java.util.Random");

		// int nextInt()
		random.nextInt.overload().implementation = function () 
		{
			var intVal = this.nextInt();
			console.log("[*] Random.nextInt called: " + intVal + "\n");
			return intVal;
		};

		// int nextInt(int bound)
		random.nextInt.overload('int').implementation = function (var0) 
		{
			var intVal = this.nextInt(var0);
			console.log("[*] Random.nextInt with bound: " + var0 + " called: " + intVal + "\n");
			return intVal;
		};

		// double nextDouble()
		random.nextDouble.implementation = function () 
		{
			var doubleVal = this.nextDouble();
			console.log("[*] Random.nextDouble called: " + doubleVal + "\n");
			return doubleVal;
		};

		// double nextGaussian()
		random.nextGaussian.implementation = function () 
		{
			var doubleVal = this.nextGaussian();
			console.log("[*] Random.nextGaussian called: " + doubleVal + "\n");
			return doubleVal;
		};

		// boolean nextBoolean()
		random.nextBoolean.implementation = function () 
		{
			var booleanVal = this.nextBoolean();
			console.log("[*] Random.nextBoolean called: " + booleanVal + "\n");
			return booleanVal;
		};

		// float nextFloat()
		random.nextFloat.implementation = function () 
		{
			var floatVal = this.nextFloat();
			console.log("[*] Random.nextFloat called: " + floatVal + "\n");
			return floatVal;
		};

		// long nextLong()
		random.nextLong.implementation = function () 
		{
			var longVal = this.nextLong();
			console.log("[*] Random.nextLong called: " + longVal + "\n");
			return longVal;
		};
	});
});