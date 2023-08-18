![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)

Collection of useful FRIDA Mobile Scripts.

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

Feel free to PR if you want to add new scripts to the list. New scripts will have to respect the nomenclature currently used:

```shell
    Description: Small description of the script
    Usage: frida -U -f XXX -l script-name.js
    Credit: 

    Link:
    	https://link
```

*Almost none of his scripts are mine. If there is any mistake on the credits of a script, please contact me*


## Table of Contents

<details>
<summary>Observer</summary>

* **Crypto**

	* [android-aes-decrypt-no-iv.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aes-decrypt-no-iv.js)
	* [android-aesinfo-and-hashing-decryptor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aesinfo-and-hashing-decryptor.js)
	* [android-aesinfo-decryptor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-aesinfo-decryptor.js)
	* [android-crypto-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-crypto-observer.js)
	* [android-hashing-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-hashing-observer.js)
	* [android-java-crypto-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-java-crypto-observer.js)
	* [android-pbe-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-pbe-observer.js)
	* [android-random-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/android-random-observer.js)
	* [ios-intercept-crypto.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/ios-intercept-crypto.js)
	* [ios-intercept-crypto2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Crypto/ios-intercept-crypto2.js)


* **DeepLink & UrlScheme**

	* [android-deeplink-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/android-deeplink-observer.js)
	* [ios-url-scheme-dumper.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/ios-url-scheme-dumper.js)
	* [ios-url-scheme-fuzzing.js](https://github.com/rsenet/FriList/blob/main/01_Observer/DeepLink_UrlScheme/ios-url-scheme-fuzzing.js)


* **Library**

	* [android-library-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Library/android-library-observer.js)
	* [android-library-observer2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Library/android-library-observer2.js)


* **Network**

	* Bluetooth

		* [android-bluetooth-meta-data-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/Bluetooth/android-bluetooth-meta-data-observer.js)
		* [android-ios-bluetooth-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/Bluetooth/android-ios-bluetooth-observer.js)
		
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

	* **WebInspector**

		* [ios-webinspector-enable.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/WebInspector/ios-webinspector-enable.js)

	* **WebView**

		* [ios-webview-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Network/Webview/ios-webview-observer.js)

* **Storage**

	* **Cookies**

		* [android-cookie-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Cookies/android-cookie-observer.js)
		* [ios-binarycookies-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Cookies/ios-binarycookies-observer.js)


	* **FileSystem**

		* [android-filesystem-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/FileSystem/android-filesystem-observer.js)
		* [android-filesystem-observer2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/FileSystem/android-filesystem-observer2.js)


	* **KeyboardCache**

		* [ios-keyboard-cache-checker.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/KeyboardCache/ios-keyboard-cache-checker.js)


	* **Keystore_keychain**

		* [android-keystore-monitor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Keystore_keychain/android-keystore-monitor.js)
		* [ios-keychain-monitor.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Keystore_keychain/ios-keychain-monitor.js)


	* **Log**

		* [android-log-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Log/android-log-observer.js)
		* [ios-nslog-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Log/ios-nslog-observer.js)


	* **Pasteboard**

		* [ios-pasteboard-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Pasteboard/ios-pasteboard-observer.js)


	* **Plist**

		* [ios-read-nsuserdefaults.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Plist/ios-read-nsuserdefaults.js)
		* [ios-read-plist-file.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/Plist/ios-read-plist-file.js)


	* **SharedPreferences**

		* [android-encryptedsharedpreferences-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SharedPreferences/android-encryptedsharedpreferences-observer.js)
		* [android-sharedpreferences-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SharedPreferences/android-sharedpreferences-observer.js)


	* **SQLite**

		* [android-sqlite-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SQLite/android-sqlite-observer.js)
		* [android-sqlitecipher-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SQLite/android-sqlitecipher-observer.js)
		* [android-sqlitecipher-password-grabber.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SQLite/android-sqlitecipher-password-grabber.js)
		* [android-sqlitecipher-password-grabber2.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SQLite/android-sqlitecipher-password-grabber2.js)
		* [ios-sqlite3-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/Storage/SQLite/ios-sqlite3-observer.js)

	* **Other**

		* [android-permissions-observer.js](https://github.com/rsenet/FriList/blob/main/01_Observer/android-permissions-observer.js)
		* [android-strings_compare.js](https://github.com/rsenet/FriList/blob/main/01_Observer/android-strings_compare.js)

</details>

<details>
<summary>Security Bypass</summary>

* **Biometric**

	* [android-biometric-bypass-android11.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Biometric/android-biometric-bypass-android11.js)
	* [ios-biometric-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Biometric/ios-biometric-bypass.js)
	* [ios-touchid-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/Biometric/ios-touchid-bypass.js)

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
	* [ios-pinning-bypass-10.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-10.js)
	* [ios-pinning-bypass-11.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-11.js)
	* [ios-pinning-bypass-12.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-12.js)
	* [ios-pinning-bypass-13.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-pinning-bypass-13.js)
	* [ios-trustkit-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/ios-trustkit-pinning-bypass.js)
	* [phonegap-pinning-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/CertificatePinning/phonegap-pinning-bypass.js)

* **DebugMode_Emulator**

	* [android-adb-detection-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode_Emulator/android-adb-detection-bypass.js)
	* [android-debug-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode_Emulator/android-debug-bypass.js)
	* [android-emulator-detection-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode_Emulator/android-emulator-detection-bypass.js)
	* [react-native-emulator-detection-bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/DebugMode_Emulator/react-native-emulator-detection-bypass.js)

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
	* [android-system_exit_bypass.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/android-system_exit_bypass.js)
	* [ios-change-system-version.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/ios-change-system-version.js)
	* [ios-custom-keyboard-allowed.js](https://github.com/rsenet/FriList/blob/main/02_SecurityBypass/ios-custom-keyboard-allowed.js)


</details>

<details>
<summary>Static Analysis</summary>

* [android-dex_classes_enumeration.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/android-dex_classes_enumeration.js)
* [android-find-all-classes-methods.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/android-find-all-classes-methods.js)
* [android-find-all-classes.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/android-find-all-classes.js)
* [android-find-specific-classes-methods.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/android-find-specific-classes-methods.js)
* [android-get-app-env-info.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/android-get-app-env-info.js)
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
* [ios-get_app_env_info.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-get_app_env_info.js)
* [ios-find-all-classes.js](https://github.com/rsenet/FriList/blob/main/03_StaticAnalysis/ios-find-all-classes.js)

</details>

<details>
<summary>Specific Software</summary>

* [AppLock-authentication-bypass.js](https://github.com/rsenet/FriList/blob/main/05_SpecificSoftware/AppLock-authentication-bypass.js)

</details>

<details>
<summary>Other</summary>

* [android-file-delete-prevention.js](https://github.com/rsenet/FriList/blob/main/04_Other/android-file-delete-prevention.js)
* [android-injector.js](https://github.com/rsenet/FriList/blob/main/04_Other/android-injector.js)
* [android-stetho-loader.js](https://github.com/rsenet/FriList/blob/main/04_Other/android-stetho-loader.js)
</details>

