![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

Collection of useful FRIDA Mobile Scripts.

Feel free to PR if you want to add new scripts to the list. New scripts will have to respect the nomenclature currently used

*Almost none of his scripts are mine. If there is any mistake on the credits of a script, please contact me*


```shell
    / _  |   Frida 16.0.6 - A world-class dynamic instrumentation toolkit
   | (_| |
    > _  |   Commands:
   /_/ |_|       help      -> Displays the help system
   . . . .       object?   -> Display information about 'object'
   . . . .       exit/quit -> Exit
   . . . .
   . . . .   More info at https://frida.re/docs/home/
   . . . .
   . . . .   Connected to Android Emulator 5554 (id=emulator-5554)
```

## Table of Contents

<details>
<summary>Observer</summary>

* **Cookies**

	* android-cookie-observer.js
	* ios-binarycookies-observer.js

* **Crypto**

	* android-aes-decrypt-no-iv.js
	* android-aesinfo-and-hashing-decryptor.js
	* android-aesinfo-decryptor.js
	* android-hashing-observer.js
	* android-java-crypto-observer.js
	* ios-intercept-crypto.js
	* ios-intercept-crypto2.js

* **DeepLink & UrlScheme**

	* android-deeplink-observer.js
	* ios-url-scheme-dumper.js
	* ios-url-scheme-fuzzing.js

* **FileSystem**

	* android-filesystem-observer.js
	* android-filesystem-observer2.js

* **KeyboardCache**

	* ios-keyboard-cache-checker.js

* **Library**

	* android-library-observer.js

* **Log**

	* android-log-observer.js
	* ios-nslog-observer.js


* **Network**

	* NSURL

		* ios-nsurlrequest-observer.js
		* ios-nsurlsession-observer.js
	
	* OkHttp

		* android-okhttp-logger.js
		* android-okhttp-logger2.js
		* android-okhttp-proxy-installator.js	
	* TCP

		* android-tcp-trace.js
			
	* TLS

		* ios-tls-keylogger-ios12.js
		* ios-tls-keylogger-ios13.js
		* ios-tls-keylogger-ios14.js

* **Pasteboard**

	* ios-pasteboard-observer.js

* **Plist**

	* ios-read-nsuserdefaults.js
	* ios-read-plist-file.js

* **SharedPreferences**

	* android-encryptedsharedpreferences-observer.js
	* android-sharedpreferences-observer.js

* **SQLite**

	* android-sqlite-observer.js
	* android-sqlitecipher-observer.js
	* ios-sqlite3-observer.js

* **WebInspector**

	* ios-webinspector-enable.js

</details>

<details>
<summary>Security Bypass</summary>

* **Biometric**

	* android-biometric-bypass-android11.js
	* ios-biometric-bypass.js

* **CertificatePinning**

	* android_proxy-add.js
	* android-multiple-pinning-bypass.js
	* android-multiple-pinning-bypass2.js
	* android-multiple-pinning-bypass3.js
	* android-okhttp-pinning-bypass.js
	* android-okhttp-pinning-bypass2.js
	* android-trustmanager-pinning-bypass.js
	* android-trustmanager-pinning-bypass2.js
	* flutter-pinning-bypass.js
	* flutter-pinning-bypass2.js
	* flutter-tls1-verification-bypass.js
	* ios-pinning-bypass-10-11.js
	* ios-pinning-bypass-12.js
	* ios-pinning-bypass-13.js
	* ios-trustkit-pinning-bypass.js
	* phonegap-pinning-bypass.js

* **DebugMode**

	* android-debugging-bypass.js
	* android-debugmode-bypass.js
	* react-native-bypass-emulator-detection.js

* **FlagSecure**

	* android-flagsecure.js

* **Location**

	* android-location-spoofing.js
	* ios-location-spoofing.js

* **RootDetection**

	* android-multiple-root-bypass.js
	* ios-multiple-jailbreak-bypass.js
	* ios-simple-jailbreak-bypass.js
	* xamarin-android-multiple-root-bypass.js
	* xamarin-multiple-jailbreak-bypass.js

* **WebView**

	* android-enable-webview-debug.js
	* cordova-enable-webview-debugging.js

* **WiFi**

	* android-wifi-check-bypass.js

* **Other**

	* android-anti-frida-exposed-detection-bypass.js
	* android-sdk-version-change.js
	* ios-custom-keyboard-allowed.js

</details>

<details>
<summary>Static Analysis</summary>

* ios-app-by-display-name.js
* ios-application-static-analysis.js
* ios-application-static-analysis2.js
* ios-data-protection-display.js
* ios-find-all-classes-methods.js
* ios-find-all-classes.js
* ios-find-all-methods-of-specific-class.js
* ios-find-app-classes-methods.js
* ios-find-app-classes.js
* ios-find-specific-method.js

</details>

<details>
<summary>Specific Software</summary>

* AppLock-authentication-bypass.js

</details>

<details>
<summary>Other</summary>

* android-injector.js
</details>

