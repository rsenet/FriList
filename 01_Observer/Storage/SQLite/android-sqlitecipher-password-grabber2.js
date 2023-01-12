/* 
    Description: Android SQLCipher Password Grabber2
    Usage: frida -U -f XXX -l android-sqlitecipher-password-grabber2.js --no-pause
    Credit: Ackcent Cybersecurity

    Link:
        https://github.com/sqlcipher/android-database-sqlcipher
*/

Java.perform(function () 
{
    var CipheredSQLiteDatabase = Java.use("net.sqlcipher.database.SQLiteDatabase");

    console.log("[+] Hooked: " + CipheredSQLiteDatabase);
    
    CipheredSQLiteDatabase.openOrCreateDatabase.overload("java.lang.String", "java.lang.String", "net.sqlcipher.database.SQLiteDatabase$CursorFactory", "net.sqlcipher.database.SQLiteDatabaseHook").implementation = function(path, password, factory, hook) 
    {
        console.log("[+] PASSWORD FOUND: " + password.join(""));

        var db = this.openOrCreateDatabase(path, password, factory, hook);

        return db;
    }
});