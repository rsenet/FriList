/* 
    Description: Android FileSystem Observer
    Usage: frida -U -f XXX -l android-filesystem-observer2.js
    Credit: secretdiary.ninja

	Links:
	    https://developer.android.com/reference/java/io/File
	    https://developer.android.com/reference/java/io/FileInputStream
	    https://developer.android.com/reference/java/io/FileOutputStream
	    https://developer.android.com/reference/java/lang/String
	    https://developer.android.com/reference/java/util/zip/GZIPOutputStream
	    https://developer.android.com/reference/java/util/zip/GZIPInputStream
	    https://developer.android.com/reference/java/lang/StringBuilder
*/

setTimeout(function()
{
	Java.perform(function()
	{	
		console.log("JAVA IO started");
		
		/** File **/		
		var file = Java.use("java.io.File");
		file.$init.overload("java.lang.String").implementation = function(path)
		{
			console.log("[*] New File Instance Created using path: " + path);
			return file.$init.overload("java.lang.String").call(this, path);
		}

		file.$init.overload("java.io.File", "java.lang.String").implementation = function(fileObject, path)
		{
			console.log("[*] New File Instance Created using parent object: " + fileObject.toString() + " using child path: " + path );
			return file.$init.overload("java.io.File", "java.lang.String").call(this, fileObject, path);
		}

		file.$init.overload("java.lang.String", "java.lang.String").implementation = function(parent, path)
		{
			console.log("[*] New File Instance Created using parent path: " + parent + " using child path: " + path );
			return file.$init.overload("java.lang.String", "java.lang.String").call(this, parent, path);
		}

		file.$init.overload("java.net.URI").implementation = function(neturi)
		{
			console.log("[*] New File Instance Created using URI: " + neturi.toString());
			return file.$init.overload("java.net.URI").call(this, neturi);
		}

		/** InputStream **/
		var is = Java.use("java.io.InputStream");
		
		// InputStream.read()
		is.read.overload().implementation = function()
		{
			ret = is.read.overload().call(this);
			console.log("InputStream.read()");
			return ret;
		}
		
		// InputStream.read(bytes)
		is.read.overload("[B").implementation = function(bArr)
		{
			ret = is.read.overload("[B").call(this, bArr);
			console.log("InputStream.read([] byte) called ("+ret+")");
			return ret;
		}
		
		// InputStream.read(bytes)
		is.read.overload("[B", "int", "int").implementation = function(bArr, offset, dataLen)
		{
			ret = is.read.overload("[B", "int", "int").call(this, bArr, offset, dataLen);
			console.log("InputStream.read(byte[], offset: "+offset+", len: "+dataLen+") called");
			return ret;
		}
		
		/** OutputStream **/
		var out = Java.use("java.io.OutputStream");
		
		// OutputStream.write(i)
		out.write.overload("int").implementation = function(i)
		{
			console.log("OutputStream.write(int)");
			out.write.overload("int").call(this,i);
		}
		
		// OutputStream.write(byte[])
		out.write.overload("[B").implementation = function(bArr)
		{
			try
			{
				console.log("OutputStream.write(byte[]) ("+bArr.length+")");
			}
			catch(e)
			{
				console.log("OutputStream.write(byte[]) ("+bArr.value.length+")");
			}
			out.write.overload("[B").call(this,bArr);
		}
		
		// OutputStream.write(byte[], off, len)
		out.write.overload("[B", "int", "int").implementation = function(bArr, offset, len)
		{
			console.log("OutputStream.write(byte[], offset: "+offset+", len: "+len+")");
			out.write.overload("[B", "int", "int").call(this,bArr, offset, len);
		}

		/** GZIP IO **/
		var gzout = Java.use("java.util.zip.GZIPOutputStream");
		
		gzout.write.overload("[B", "int", "int").implementation = function(bArr, offset, len)
		{
			console.log("GZIPOutputStream.write(byte[], offset: "+offset+", len: "+len+")");
			gzout.write.overload("[B", "int", "int").call(this,bArr, offset, len);
		}
		
		var gzin = Java.use("java.util.zip.GZIPInputStream");
		
		gzin.read.overload("[B", "int", "int").implementation = function(bArr, offset, len)
		{
			console.log("GZIPInputStream.read(byte[], offset: "+offset+", len: "+len+")");
			gzin.read.overload("[B", "int", "int").call(this,bArr, offset, len);
		}
		
		/** StringBuilder **/
		var strbld = Java.use("java.lang.StringBuilder");
		
		strbld.toString.overload().implementation = function()
		{
			var ret = strbld.toString.overload().call(this);
			if (ret != "Master enabled = true")
				console.log("StringBuilder.toString(): " + ret);

			return ret;
		}

		/** String concat **/
		var str = Java.use("java.lang.String");
		str.concat.overload("java.lang.String").implementation = function(strval)
		{
			var ret = str.concat.overload("java.lang.String").call(this, strval);
			console.log("concat(" + strval + "): " + ret);

			return ret;
		}
	});
},0);