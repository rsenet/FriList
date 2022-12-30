/* 
    Description: Android EncryptedSharedPreferences Observer
    Usage: frida -U -f XXX -l android-encryptedsharedpreferences-observer.js
    Credit: Alkeraithe

    Link:
        https://developer.android.com/reference/androidx/security/crypto/EncryptedSharedPreferences
*/

Java.perform(function() 
{
    var EncryptedSharedPrefrenceEditor = Java.use("androidx.security.crypto.EncryptedSharedPreferences$Editor");

    EncryptedSharedPrefrenceEditor.putString.overload('java.lang.String', 'java.lang.String').implementation = function(key, value) 
    {
        console.log("EncryptedSharedPrefrence putString()");
        console.log(key + ":" + value);
        var ret = this.putString(key, value);
        return ret;
    }

    EncryptedSharedPrefrenceEditor.putLong.overload('java.lang.String', 'long').implementation = function(key, value)
    {
        console.log("EncryptedSharedPrefrence putLong()");
        console.log(key + ":" + value);
        var ret = this.putLong(key, value);
        return ret;
    }

    EncryptedSharedPrefrenceEditor.putBoolean.overload('java.lang.String', 'boolean').implementation = function(key, value) 
    {
        console.log("EncryptedSharedPrefrence putBoolean()");
        console.log(key + ":" + value);
        var ret = this.putBoolean(key, value);
        return ret;
    }

    EncryptedSharedPrefrenceEditor.putFloat.overload('java.lang.String', 'float').implementation = function(key, value) 
    {
        console.log("EncryptedSharedPrefrence putFloat()");
        console.log(key + ":" + value);
        var ret = this.putFloat(key, value);
        return ret;
    }

    EncryptedSharedPrefrenceEditor.putInt.overload('java.lang.String', 'int').implementation = function(key, value) 
    {
        console.log("EncryptedSharedPrefrence putInt()");
        console.log(key + ":" + value);
        var ret = this.putInt(key, value);
        return ret;
    }

    EncryptedSharedPrefrenceEditor.putStringSet.overload('java.lang.String', 'java.util.Set').implementation = function(key, value) 
    {
        console.log("EncryptedSharedPrefrence putStringSet()");
        console.log(key + ":" + value);
        var ret = this.putStringSet(key, value);
        return ret;
    }
});