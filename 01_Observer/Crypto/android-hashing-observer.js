/* 
    Description: Android Hasing Observer
    Usage: frida -U -f XXX -l android-hashing-observer.js
    Credit: dzonerzy

    Link:
        https://developer.android.com/reference/java/security/MessageDigest
*/

Java.perform(function() 
{
    var use_single_byte = false;
    var complete_bytes = new Array();
    var index = 0;

    var mdigest = Java.use('java.security.MessageDigest');

    var get_instance_1 = mdigest.getInstance.overload('java.lang.String');
    var get_instance_2 = mdigest.getInstance.overload('java.lang.String', 'java.security.Provider');
    var get_instance_3 = mdigest.getInstance.overload('java.lang.String', 'java.lang.String');

    var digest_1 = mdigest.digest.overload('[B', 'int', 'int');
    var digest_2 = mdigest.digest.overload('[B');
    var digest_3 = mdigest.digest.overload();

    var update_1 = mdigest.update.overload('[B');
    var update_2 = mdigest.update.overload('byte');
    var update_3 = mdigest.update.overload('java.nio.ByteBuffer');
    var update_4 = mdigest.update.overload('[B', 'int', 'int');

    update_1.implementation = function(arr) 
    {
        var i = 0;
        for (i = 0; i < arr.length; i = i + 1) 
        {
            complete_bytes[index] = arr[i];
            index = index + 1;
        }

        return update_1.call(this, arr);
    }

    update_2.implementation = function(b) 
    {
        complete_bytes[index] = b;
        index = index + 1;
        return update_2.call(this, b);
    }

    update_3.implementation = function(arr) 
    {
        var i = 0;
        var ba = arr.array();

        for (i = 0; i < ba.length; i = i + 1) 
        {
            complete_bytes[index] = ba[i];
            index = index + 1;
        }

        return update_3.call(this, arr);
    }

    update_4.implementation = function(arr, off, len)
    {
        var i = 0;

        for (i = off; i < len; i = i + 1) 
        {
            complete_bytes[index] = arr[i];
            index = index + 1;
        }

        return update_4.call(this, arr, off, len);
    }

    digest_1.implementation = function(arr, offset, length)
    {
        var i = 0;

        for (i = offset; i < length; i = i + 1) 
        {
            complete_bytes[index] = arr[i];
            index = index + 1;
        }

        var org = b2s(complete_bytes);
        send("Got Data:\\n" + hexdump(org, 16));
        index = 0;
        complete_bytes = [];
        return digest_1.call(this, arr, offset, length);
    }

    digest_2.implementation = function(arr) 
    {
        var i = 0;

        for (i = 0; i < arr.length; i = i + 1) 
        {
            complete_bytes[index] = arr[i];
            index = index + 1;
        }

        var org = b2s(complete_bytes);
        send("Got Data:\\n" + hexdump(org, 16));
        index = 0;
        complete_bytes = [];
        return digest_2.call(this, arr);
    }

    digest_3.implementation = function() 
    {
        var org = b2s(complete_bytes);
        send("Got Data:\\n" + hexdump(org, 16));
        index = 0;
        complete_bytes = [];
        return digest_3.call(this);
    }

    get_instance_1.implementation = function(alg) 
    {
        send("Crafting " + alg + " hash!");
        return get_instance_1.call(this, alg);
    }

    get_instance_2.implementation = function(alg, provider) 
    {
        send("Crafting " + alg + " hash!");
        return get_instance_2.call(this, alg, provider);
    }

    get_instance_3.implementation = function(alg, provider) 
    {
        send("Crafting " + alg + " hash!");
        return get_instance_3.call(this, alg, provider);
    }

    function hexdump(buffer, blockSize) 
    {
        blockSize = blockSize || 16;
        var lines = [];
        var hex = "0123456789ABCDEF";

        for (var b = 0; b < buffer.length; b += blockSize) 
        {
            var block = buffer.slice(b, Math.min(b + blockSize, buffer.length));
            var addr = ("0000" + b.toString(16)).slice(-4);

            var codes = block.split('').map(function(ch) 
            {
                var code = ch.charCodeAt(0);
                return " " + hex[(0xF0 & code) >> 4] + hex[0x0F & code];
            }).join("");

            codes += "   ".repeat(blockSize - block.length);
            var chars = block.replace(/[\\x00-\\x1F\\x20]/g, '.');
            chars += " ".repeat(blockSize - block.length);
            lines.push(addr + " " + codes + "  " + chars);
        }

        return lines.join("\\n");
    }

    function b2s(array) 
    {
        var result = "";

        for (var i = 0; i < array.length; i++) 
        {
            result += String.fromCharCode(modulus(array[i], 256));
        }

        return result;
    }

    function modulus(x, n) 
    {
        return ((x % n) + n) % n;
    }
});