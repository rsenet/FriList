/* 
    Description: Android String Comparaison Observer
    Usage: frida -U -f XXX -l android-permissions-observer.js
    Credit: iddoeldor

    Links:
        https://developer.android.com/reference/java/lang/String
        https://developer.android.com/reference/java/lang/Object
*/

Java.performNow(function () 
{
    var str = Java.use('java.lang.String');

    str.equals.overload('java.lang.Object').implementation = function (obj) 
    {
        var result = str.equals.overload('java.lang.Object').call(this, obj);

        if (obj) 
        {
            if (obj.toString().length > 8) 
            {
                console.log(str.toString.call(this) + " == " + obj.toString() + " ? " + result);
            }
        }

        return result;
    }
});