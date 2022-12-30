/* 
    Description: Android SQLite Observer
    Usage: frida -U -f XXX -l android-sqlite-observer.js
    Credit: secretdiary.ninja / @rsenet (add execPerConnectionSQL check)

	Link:
		https://developer.android.com/reference/android/database/sqlite/SQLiteDatabase
*/

setImmediate(function() 
{
	Java.perform(function() 
	{
		var sqliteDatabase = Java.use("android.database.sqlite.SQLiteDatabase");

    	sqliteDatabase.execPerConnectionSQL.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function(var0, var1) 
    	{
    		console.log("[*] SQLiteDatabase.execPerConnectionSQL called with query: " + var0 + "," + var1 + "\n");
    		var execPerConnectionSQL = this.execPerConnectionSQL(var0, var1);
        	return execPerConnectionSQL
    	};

		sqliteDatabase.execSQL.overload('java.lang.String').implementation = function(var0) 
		{
			console.log("[*] SQLiteDatabase.exeqSQL called with query: " + var0 + "\n");
			var execSQLRes = this.execSQL(var0);
			return execSQLRes;
		};

		sqliteDatabase.execSQL.overload('java.lang.String', '[Ljava.lang.Object;').implementation = function(var0, var1) 
		{
			console.log("[*] SQLiteDatabase.exeqSQL called with query: " + var0 +  " and arguments: " + var1 + "\n");
			var execSQLRes = this.execSQL(var0, var1);
			return execSQLRes;
		};

  		sqliteDatabase.query.overload('boolean', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(var0, var1, var2, var3, var4, var5, var6, var7, var8) 
  		{
			var logVal = "Table: " + var1 + ", selection value: " + var3 + ", selectionArgs: " + var4 + " distinct: " + var0;
			console.log("SQLiteDatabase.query called " + logVal + "\n");
			var queryRes = this.query(var0, var1, var2, var3, var4, var5, var6, var7, var8);
			return queryRes;
		};

  		sqliteDatabase.query.overload('java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(var0, var1, var2, var3, var4, var5, var6, var7) 
  		{
			var logVal = "Table: " + var0 + ", selection value: " + var2 + ", selectionArgs: " + var3;
			console.log("[*] SQLiteDatabase.query called: " + logVal + "\n");
			var queryRes = this.query(var0, var1, var2, var3, var4, var5, var6, var7);
			return queryRes;
		};

   		sqliteDatabase.query.overload('boolean', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'android.os.CancellationSignal').implementation = function(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9) 
   		{
			var logVal = "Table: " + var1 + ", selection value: " + var3 + ", selectionArgs: " + var4;
			console.log("[*] SQLiteDatabase.query called: " + logVal + "\n");
			var queryRes = this.query(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9);
			return queryRes;
		};

  		sqliteDatabase.query.overload('java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(var0, var1, var2, var3, var4, var5, var6) 
  		{
			var logVal = "Table: " + var0 + ", selection value: " + var2 + ", selectionArgs: " + var3;
			console.log("[*] SQLiteDatabase.query called " + logVal + "\n");
			var queryRes = this.query(var0, var1, var2, var3, var4, var5, var6);
			return queryRes;
		};

  		sqliteDatabase.queryWithFactory.overload('android.database.sqlite.SQLiteDatabase$CursorFactory', 'boolean', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9) 
  		{
			var logVal = "Table: " + var2 + ", selection value: " + var4 + ", selectionArgs: " + var5 + " distinct: " + var1;
			console.log("[*] SQLiteDatabase.queryWithFactory called " + logVal + "\n");
			var queryWithFactoryRes = this.queryWithFactory(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9);
			return queryWithFactoryRes;
		};   		

  		sqliteDatabase.queryWithFactory.overload('android.database.sqlite.SQLiteDatabase$CursorFactory', 'boolean', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'android.os.CancellationSignal').implementation = function(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9, var10) 
  		{
			var logVal = "Table: " + var2 + ", selection value: " + var4 + ", selectionArgs: " + var5 + " distinct: " + var1;
			console.log("[*] SQLiteDatabase.queryWithFactory called: " + logVal + "\n");
			var queryWithFactoryRes = this.queryWithFactory(var0, var1, var2, var3, var4, var5, var6, var7, var8, var9, var10);
			return queryWithFactoryRes;
		}; 

		sqliteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;').implementation = function(var0, var1) 
		{
			console.log("[*] SQLiteDatabase.rawQuery called with query: " + var0 + " and contentValues: " + var1 +"\n");
			var rawQueryRes = this.rawQuery(var0, var1);
			return rawQueryRes;
		};

		sqliteDatabase.rawQuery.overload('java.lang.String', '[Ljava.lang.String;', 'android.os.CancellationSignal').implementation = function(var0, var1, var2) 
		{
			console.log("[*] SQLiteDatabase.rawQuery called with query: " + var0 + " and contentValues: " + var1 +"\n");
			var rawQueryRes = this.rawQuery(var0, var1, var2);
			return rawQueryRes;
		};

   		sqliteDatabase.rawQueryWithFactory.overload('android.database.sqlite.SQLiteDatabase$CursorFactory', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String', 'android.os.CancellationSignal').implementation = function(var0, var1, var2, var3, var4) 
   		{
			console.log("[*] SQLiteDatabase.rawQueryWithFactory called with query: " + var1 + " and contentValues: " + var2 + "\n");
			var rawQueryWithFactoryRes = this.rawQueryWithFactory(var0, var1, var2, var3, var4);
			return rawQueryWithFactoryRes;
		};

   		sqliteDatabase.rawQueryWithFactory.overload('android.database.sqlite.SQLiteDatabase$CursorFactory', 'java.lang.String', '[Ljava.lang.String;', 'java.lang.String').implementation = function(var0, var1, var2, var3) 
   		{
			console.log("[*] SQLiteDatabase.rawQueryWithFactory2 called with query: " + var1 + " and contentValues: " + var2 +"\n");
			var rawQueryWithFactoryRes = this.rawQueryWithFactory(var0, var1, var2, var3);
			return rawQueryWithFactoryRes;
		};

		sqliteDatabase.insert.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) 
		{
			console.log("[*] SQLiteDatabase.insert called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insert(var0, var1, var2);
			return insertValueRes;
		};

		sqliteDatabase.insertOrThrow.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) 
		{
			console.log("[*] SQLiteDatabase.insertOrThrow called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insertOrThrow(var0, var1, var2);
			return insertValueRes;
		};

		sqliteDatabase.insertOrThrow.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues').implementation = function(var0, var1, var2) 
		{
			console.log("[*] SQLiteDatabase.insertOrThrow called. Adding new value: " + var2 + " to database: " + var0 + "\n");
			var insertValueRes = this.insertOrThrow(var0, var1, var2);
			return insertValueRes;
		};

		sqliteDatabase.insertWithOnConflict.overload('java.lang.String', 'java.lang.String', 'android.content.ContentValues', 'int').implementation = function(var0, var1, var2, var3) 
		{
			console.log("[*] SQLiteDatabase.insertWithOnConflict called. Adding new value: " + var2 + " to database: " + var0 + " and conflictAlgorithm: " + var3 + "\n");
			var insertValueRes = this.insertWithOnConflict(var0, var1, var2, var3);
			return insertValueRes;
		};

		sqliteDatabase.update.overload('java.lang.String', 'android.content.ContentValues', 'java.lang.String', '[Ljava.lang.String;').implementation = function(var0, var1, var2, var3) 
		{
			var methodVal = "[*] SQLiteDatabase.update called.";
			var logVal = "Update table: " + var0 + " with where clause: "  + var2 + " whereArgs:" + var3.toString() + " and values to update: " + var1.toString() +"\n";
			console.log(methodVal, logVal);
			
			var updateRes = this.update(var0, var1, var2, var3);
			return updateRes;
		};

		sqliteDatabase.updateWithOnConflict.overload('java.lang.String', 'android.content.ContentValues', 'java.lang.String', '[Ljava.lang.String;', 'int').implementation = function(var0, var1, var2, var3, var4) 
		{
			var methodVal = "[*] SQLiteDatabase.updateWithOnConflict called.";
			var logVal = "Update table: " + var0 + " with where clause: "  + var2 + " whereArgs:" + var3 + " values to update: " + var1 + " and conflictAlgorithm: " + var4 +"\n";
			console.log(methodVal, logVal);
			
			var updateRes = this.updateWithOnConflict(var0, var1, var2, var3, var4);
			return updateRes;
		};
	});
});