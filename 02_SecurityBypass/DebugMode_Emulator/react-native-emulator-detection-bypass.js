/* 
    Description: ReactNatice Emulator Detection Bypass frida script
    Usage: frida -U -f XXXX -l react-native-emulator-detection-bypass.js
    Credit: https://twitter.com/KhantZero

    Link:
        https://github.com/react-native-device-info/react-native-device-info/blob/master/android/src/main/java/com/learnium/RNDeviceInfo/RNDeviceModule.java
*/

if (Java.available) 
{
    Java.perform(function() 
    {
        try 
        {
            var Activity = Java.use("com.learnium.RNDeviceInfo.RNDeviceModule");
            Activity.isEmulatorSync.implementation = function() 
            {
                return(false);
            }
        } 
        catch (error) 
        {
            console.log((error.stack));
        }
    });
} 
else 
{
    console.log("[-] Java is Not available");
}