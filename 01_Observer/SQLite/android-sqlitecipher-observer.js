/* 
    Description: Android SQLCipher Observer
    Usage: frida -U -f XXX -l android-sqlitecipher-observer.js
    Credit: Nawaf Alkerithe 

    Link:
        https://github.com/sqlcipher/android-database-sqlcipher
*/

Java.perform(function()
{
    var encSQLiteDatabase = Java.use("net.sqlcipher.database.SQLiteDatabase");

    encSQLiteDatabase.execSQL.overload('java.lang.String').implementation = function(sql)
    {
        console.log("encrypted execSQL(" + sql + ")");
        return this.execSQL(sql);
    };

    encSQLiteDatabase.rawExecSQL.overload('java.lang.String').implementation = function(sql)
    {
        console.log("encrypted rawExecSQL(" + sql + ")");
        return this.rawExecSQL(sql);
    };

    encSQLiteDatabase.execSQL.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function(sql, bind_args) 
    {
        console.log("encrypted execSQL(" + sql + "," + bind_args + ")");
        return this.execSQL(sql, bind_args);
    };


    encSQLiteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;', 'int', 'int').implementation = function(sql, selectionArgs, initialRead, maxRead) 
    {
        console.log("encrypted rawQuery(" + sql + "," + selectionArgs + "," + initialRead + "," + maxRead);
        return this.rawQuery(sql, selectionArgs, initialRead, maxRead);
    };

    encSQLiteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(sql, selectionArgs) 
    {
        console.log("encrypted rawQuery(" + sql + "," + selectionArgs + ")");
        return this.rawQuery(sql, selectionArgs);
    };

    encSQLiteDatabase.rawQueryWithFactory.overload('net.sqlcipher.database.SQLiteDatabase$CursorFactory', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String').implementation = function(cursorFactory, sql, selectionArgs, editTable) 
    {
        console.log("encrypted rawQueryWithFactory(" + "cursorFactory," + sql + "," + selectionArgs + "," + editTable + ")");
        return this.rawQueryWithFactory(cursorFactory, sql, selectionArgs, editTable);
    };
});