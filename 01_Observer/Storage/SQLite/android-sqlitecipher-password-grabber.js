/* 
    Description: Android SQLCipher Password Grabber
    Usage: frida -U -f XXX -l android-sqlitecipher-password-grabber.js --no-pause
    Credit: Elliot Alderson

    Link:
        https://github.com/sqlcipher/android-database-sqlcipher/blob/master/android-database-sqlcipher/src/main/java/net/sqlcipher/database/SQLiteOpenHelper.java
*/

Java.perform(function () 
{
    var SQLiteOpenHelper = Java.use('net.sqlcipher.database.SQLiteOpenHelper');

    SQLiteOpenHelper.getWritableDatabase.overload('java.lang.String').implementation = function (password) 
    {
        console.log("[+] password = " + password);

        return this.getWritableDatabase.overload('java.lang.String').apply(this, arguments);
    }
});