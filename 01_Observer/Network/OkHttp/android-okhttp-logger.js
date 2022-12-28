/* 
    Description: Android OKHTTP HTTP/HTTPS requests and responses logger
    Usage: frida -U -f XXX -l android-okhttp-logger.js --no-pause
    Credit: M4v3r1ck

    This script will add HttpLoggingInterceptor at OkHttpClient, so the HttpLoggingInterceptor will print all requests and responses.
    This strategy does not matter if you are doing TLS Pinning bypass 

    Link:
        https://github.com/square/okhttp/tree/master/okhttp-logging-interceptor
*/

setTimeout(function() 
{
    Java.perform(() => 
    {
        console.log('');
        console.log('======');
        console.log('[#] Android OKHttp logging by M4v3r1ck [#]');
        console.log('======');

        //Create a new instance of HttpLoggingInterceptor class
        function getInterceptor() 
        {
            try 
            {
                const HttpLoggingInterceptor = Java.use('okhttp3.logging.HttpLoggingInterceptor');
                const Level = Java.use('okhttp3.logging.HttpLoggingInterceptor$Level');

                const MyLogger = Java.registerClass(
                {
                    name: 'MyLogger',
                    superClass: Java.use('java.lang.Object'),
                    implements: [Java.use('okhttp3.logging.HttpLoggingInterceptor$Logger')],
                    methods: 
                    {
                        log: [
                        {
                            returnType: 'void',
                            argumentTypes: ['java.lang.String'],
                            implementation: function(message) 
                            {
                                console.log('    [LOG] ' + message);
                            }
                        }]
                    },
                });

                var logInstance = HttpLoggingInterceptor.$new(MyLogger.$new());

                //If you want to log at the logcat just change to the line bellow
                //var logInstance = HttpLoggingInterceptor.$new();
                logInstance.setLevel(Level.BODY.value);

                return logInstance;

            } 
            catch (err) 
            {
                console.log("[-] Error creating interceptor")
                console.log(err);
                console.log(err.stack)
                return null;
            }
        }

        try 
        {
            var Builder = Java.use('okhttp3.OkHttpClient$Builder')
            var build = Builder.build.overload();

            build.implementation = function() 
            {
                console.log('[+] OkHttpClient$Builder ==> Adding log interceptor')

                //Add the new interceptor before call the 'build' function
                try 
                {
                    this.addInterceptor(getInterceptor());
                } 
                catch (err) 
                {
                    console.log('[-] OkHttpClient$Builder.addInterceptor error');
                    //console.log(err);
                }

                return build.call(this);
            }
        } 
        catch (err) 
        {
            console.log('[-] OkHttpClient$Builder error');
            console.log(err);
        }
    });
}, 1000);