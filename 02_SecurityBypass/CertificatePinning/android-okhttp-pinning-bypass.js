/* 
    Description: Android OkHTTP3 Certificate Pinning ByPass
    Usage: frida -U -f XXX -l android-okhttp-pinning-bypass.js
    Credit: Unknown
*/

setTimeout(function() 
{
    Java.perform(function () 
    {
		var okhttp3_CertificatePinner_class = null;

		try 
        {
            okhttp3_CertificatePinner_class = Java.use('okhttp3.CertificatePinner');    
        } 
        catch (err) 
        {
            console.log('[-] OkHTTPv3 CertificatePinner class not found. Skipping.');
            okhttp3_CertificatePinner_class = null;
        }
 
        if(okhttp3_CertificatePinner_class != null) 
        {
	        try
            {
	            okhttp3_CertificatePinner_class.check.overload('java.lang.String', 'java.util.List').implementation = function (str,list) 
                {
	                console.log('[+] Bypassing OkHTTPv3 1: ' + str);
	                return true;
	            };
	            console.log('[+] Loaded OkHTTPv3 hook 1');
	        } 
            catch(err) 
            {
	        	console.log('[-] Skipping OkHTTPv3 hook 1');
	        }
 
	        try
            {
	            okhttp3_CertificatePinner_class.check.overload('java.lang.String', 'java.security.cert.Certificate').implementation = function (str,cert) 
                {
	                console.log('[+] Bypassing OkHTTPv3 2: ' + str);
	                return true;
	            };
	            console.log('[+] Loaded OkHTTPv3 hook 2');
	        } 
            catch(err) 
            {
	        	console.log('[-] Skipping OkHTTPv3 hook 2');
	        }
 
	        try 
            {
	            okhttp3_CertificatePinner_class.check.overload('java.lang.String', '[Ljava.security.cert.Certificate;').implementation = function (str,cert_array) 
                {
	                console.log('[+] Bypassing OkHTTPv3 3: ' + str);
	                return true;
	            };
	            console.log('[+] Loaded OkHTTPv3 hook 3');
	        } 
            catch(err) 
            {
	        	console.log('[-] Skipping OkHTTPv3 hook 3');
	        }
 
	        try 
            {
	            okhttp3_CertificatePinner_class['check$okhttp'].implementation = function (str,obj) 
                {
		            console.log('[+] Bypassing OkHTTPv3 4 (4.2+): ' + str);
		        };
		        console.log('[+] Loaded OkHTTPv3 hook 4 (4.2+)');
		    } 
            catch(err) 
            {
	        	console.log('[-] Skipping OkHTTPv3 hook 4 (4.2+)');
	        }
		}
	});
    
}, 0); 

function hook_okhttp3() 
{
    Java.perform(function() 
    {
        var ByteString = Java.use("com.android.okhttp.okio.ByteString");
        var Buffer = Java.use("com.android.okhttp.okio.Buffer");
        var Interceptor = Java.use("okhttp3.Interceptor");

        var MyInterceptor = Java.registerClass(
        {
            name: "okhttp3.MyInterceptor",
            implements: [Interceptor],
            methods: 
            {
                intercept: function(chain) 
                {
                    var request = chain.request();

                    try 
                    {
                        console.log("MyInterceptor.intercept onEnter:", request, "\nrequest headers:\n", request.headers());
                        var requestBody = request.body();
                        var contentLength = requestBody ? requestBody.contentLength() : 0;

                        if (contentLength > 0) 
                        {
                            var BufferObj = Buffer.$new();
                            requestBody.writeTo(BufferObj);

                            try 
                            {
                                console.log("\nrequest body String:\n", BufferObj.readString(), "\n");
                            } 
                            catch (error) 
                            {
                                try 
                                {
                                    console.log("\nrequest body ByteString:\n", ByteString.of(BufferObj.readByteArray()).hex(), "\n");
                                } 
                                catch (error) 
                                {
                                    console.log("error 1:", error);
                                }
                            }
                        }
                    } 
                    catch (error) 
                    {
                        console.log("error 2:", error);
                    }

                    var response = chain.proceed(request);

                    try 
                    {
                        console.log("MyInterceptor.intercept onLeave:", response, "\nresponse headers:\n", response.headers());
                        var responseBody = response.body();
                        var contentLength = responseBody ? responseBody.contentLength() : 0;

                        if (contentLength > 0) 
                        {
                            console.log("\nresponsecontentLength:", contentLength, "responseBody:", responseBody, "\n");

                            var ContentType = response.headers().get("Content-Type");
                            console.log("ContentType:", ContentType);

                            if (ContentType.indexOf("video") == -1) 
                            {
                                if (ContentType.indexOf("application") == 0) 
                                {
                                    var source = responseBody.source();

                                    if (ContentType.indexOf("application/zip") != 0) 
                                    {
                                        try 
                                        {
                                            console.log("\nresponse.body StringClass\n", source.readUtf8(), "\n");
                                        } 
                                        catch (error) 
                                        {
                                            try 
                                            {
                                                console.log("\nresponse.body ByteString\n", source.readByteString().hex(), "\n");
                                            } 
                                            catch (error) 
                                            {
                                                console.log("error 4:", error);
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    } 
                    catch (error) 
                    {
                        console.log("error 3:", error);
                    }
                    return response;
                }
            }
        });

        var ArrayList = Java.use("java.util.ArrayList");
        var OkHttpClient = Java.use("okhttp3.OkHttpClient");
        console.log(OkHttpClient);

        OkHttpClient.$init.overload('okhttp3.OkHttpClient$Builder').implementation = function(Builder) 
        {
            console.log("OkHttpClient.$init:", this, Java.cast(Builder.interceptors(), ArrayList));
            this.$init(Builder);
        };

        var MyInterceptorObj = MyInterceptor.$new();
        var Builder = Java.use("okhttp3.OkHttpClient$Builder");

        console.log(Builder);
        Builder.build.implementation = function() 
        {
            this.interceptors().clear();
            //var MyInterceptorObj = MyInterceptor.$new();
            this.interceptors().add(MyInterceptorObj);
            var result = this.build();
            return result;
        };

        Builder.addInterceptor.implementation = function(interceptor) 
        {
            this.interceptors().clear();
            //var MyInterceptorObj = MyInterceptor.$new();
            this.interceptors().add(MyInterceptorObj);
            return this;
            //return this.addInterceptor(interceptor);
        };

        console.log("hook_okhttp3...");
    });
}