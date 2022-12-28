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

	* [android-cookie-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Cookies/android-cookie-observer.js)
	* [ios-binarycookies-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Cookies/ios-binarycookies-observer.js)

* **Crypto**

	* [android-aes-decrypt-no-iv.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aes-decrypt-no-iv.js)
	* [android-aesinfo-and-hashing-decryptor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aesinfo-and-hashing-decryptor.js)
	* [android-aesinfo-decryptor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aesinfo-decryptor.js)
	* [android-hashing-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-hashing-observer.js)
	* [android-java-crypto-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-java-crypto-observer.js)
	* [ios-intercept-crypto.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/ios-intercept-crypto.js)
	* [ios-intercept-crypto2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/ios-intercept-crypto2.js)

* **DeepLink & UrlScheme**

	* [android-deeplink-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/android-deeplink-observer.js)
	* [ios-url-scheme-dumper.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/ios-url-scheme-dumper.js)
	* [ios-url-scheme-fuzzing.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/ios-url-scheme-fuzzing.js)

* **FileSystem**

	* [android-filesystem-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/FileSystem/android-filesystem-observer.js)
	* [android-filesystem-observer2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/FileSystem/android-filesystem-observer2.js)

* **KeyboardCache**

	* [ios-keyboard-cache-checker.js](https://github.com/rsenet/FriList/blob/main/01_Observer/KeyboardCache/ios-keyboard-cache-checker.js)

* **Library**

	* [android-library-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Library/android-library-observer.js)

* **Log**

	* [android-log-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Log/android-log-observer.js)
	* [ios-nslog-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Log/ios-nslog-observer.js)

* **Network**

	* NSURL

		* [ios-nsurlrequest-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/NSURL/ios-nsurlrequest-observer.js)
		* [ios-nsurlsession-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/NSURL/ios-nsurlsession-observer.js)
	
	* OkHttp

		* [android-okhttp-logger.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/OkHttp/android-okhttp-logger.js)
		* [android-okhttp-logger2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/OkHttp/android-okhttp-logger2.js)
		* [android-okhttp-proxy-installator.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/OkHttp/android-okhttp-proxy-installator.js)

	* TCP

		* [android-tcp-trace.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/TCP/android-tcp-trace.js)
			
	* TLS

		* [ios-tls-keylogger-ios12.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/TLS/ios-tls-keylogger-ios12.js)
		* [ios-tls-keylogger-ios13.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/TLS/ios-tls-keylogger-ios13.js)
		* [ios-tls-keylogger-ios14.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/TLS/ios-tls-keylogger-ios14.js])

* **Pasteboard**

	* [ios-pasteboard-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Pasteboard/ios-pasteboard-observer.js)

* **Plist**

	* [ios-read-nsuserdefaults.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Plist/ios-read-nsuserdefaults.js)
	* [ios-read-plist-file.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Plist/ios-read-plist-file.js)

* **SharedPreferences**

	* [android-encryptedsharedpreferences-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/SharedPreferences/android-encryptedsharedpreferences-observer.js)
	* [android-sharedpreferences-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/SharedPreferences/android-sharedpreferences-observer.js)

* **SQLite**

	* [android-sqlite-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/SQLite/android-sqlite-observer.js)
	* [android-sqlitecipher-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/SQLite/android-sqlitecipher-observer.js)
	* [ios-sqlite3-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/SQLite/ios-sqlite3-observer.js)

* **WebInspector**

	* [ios-webinspector-enable.js](https://github.com/rsenet/FriList/blob/main/01_Observer/WebInspector/ios-webinspector-enable.js)

</details>

<details>
<summary>Security Bypass</summary>

* **Biometric**

	* [android-biometric-bypass-android11.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Biometric/android-biometric-bypass-android11.js)
	* [ios-biometric-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Biometric/ios-biometric-bypass.js)

* **CertificatePinning**

	* [android_proxy-add.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android_proxy-add.js)
	* [android-multiple-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-multiple-pinning-bypass.js)
	* [android-multiple-pinning-bypass2.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-multiple-pinning-bypass2.js)
	* [android-multiple-pinning-bypass3.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-multiple-pinning-bypass3.js)
	* [android-okhttp-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-okhttp-pinning-bypass.js)
	* [android-okhttp-pinning-bypass2.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-okhttp-pinning-bypass2.js)
	* [android-trustmanager-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-trustmanager-pinning-bypass.js)
	* [android-trustmanager-pinning-bypass2.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/android-trustmanager-pinning-bypass2.js)
	* [flutter-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/flutter-pinning-bypass.js)
	* [flutter-pinning-bypass2.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/flutter-pinning-bypass2.js)
	* [flutter-tls1-verification-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/flutter-tls1-verification-bypass.js)
	* [ios-pinning-bypass-10-11.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-10-11.js)
	* [ios-pinning-bypass-12.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-12.js)
	* [ios-pinning-bypass-13.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-13.js)
	* [ios-trustkit-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-trustkit-pinning-bypass.js)
	* [phonegap-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/phonegap-pinning-bypass.js)

* **DebugMode**

	* [android-debugging-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode/android-debugging-bypass.js)
	* [android-debugmode-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode/android-debugmode-bypass.js)
	* [react-native-bypass-emulator-detection.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode/react-native-bypass-emulator-detection.js)

* **FlagSecure**

	* [android-flagsecure.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/FlagSecure/android-flagsecure.js)

* **Location**

	* [android-location-spoofing.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Location/android-location-spoofing.js)
	* [ios-location-spoofing.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Location/ios-location-spoofing.js)

* **RootDetection**

	* [android-multiple-root-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/RootDetection/android-multiple-root-bypass.js)
	* [ios-multiple-jailbreak-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/RootDetection/ios-multiple-jailbreak-bypass.js)
	* [ios-simple-jailbreak-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/RootDetection/ios-simple-jailbreak-bypass.js)
	* [xamarin-android-multiple-root-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/RootDetection/xamarin-android-multiple-root-bypass.js)
	* [xamarin-multiple-jailbreak-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/RootDetection/xamarin-multiple-jailbreak-bypass.js)

* **WebView**

	* [android-enable-webview-debug.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/WebView/android-enable-webview-debug.js)
	* [cordova-enable-webview-debugging.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/WebView/cordova-enable-webview-debugging.js)

* **WiFi**

	* [android-wifi-check-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/WiFi/android-wifi-check-bypass.js)

* **Other**

	* [android-anti-frida-exposed-detection-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/android-anti-frida-exposed-detection-bypass.js)
	* [android-sdk-version-change.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/android-sdk-version-change.js)
	* [ios-custom-keyboard-allowed.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/ios-custom-keyboard-allowed.js)

</details>

<details>
<summary>Static Analysis</summary>

* [ios-app-by-display-name.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-app-by-display-name.js)
* [ios-application-static-analysis.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-application-static-analysis.js)
* [ios-application-static-analysis2.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-application-static-analysis2.js)
* [ios-data-protection-display.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-data-protection-display.js)
* [ios-find-all-classes-methods.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-all-classes-methods.js)
* [ios-find-all-classes.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-all-classes.js)
* [ios-find-all-methods-of-specific-class.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-all-methods-of-specific-class.js)
* [ios-find-app-classes-methods.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-app-classes-methods.js)
* [ios-find-app-classes.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-app-classes.js)
* [ios-find-specific-method.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-specific-method.js)

</details>

<details>
<summary>Specific Software</summary>

* [AppLock-authentication-bypass.js](https://github.com/rsenet/FriList/blob/main/05_SpecificSoftware/AppLock-authentication-bypass.js)

</details>

<details>
<summary>Other</summary>

* [android-injector.js](https://github.com/rsenet/FriList/blob/main/04_Other/android-injector.js)
</details>
