/* 
    Description: iOS Pasteboard Observer
    Usage: frida -U -f XXX -l ios-pasteboard-observer.js
    Credit: @interference-security

    Link:
        https://developer.apple.com/documentation/uikit/uipasteboard
*/

function start_pasteboard_monitoring(interval_value)
{
    var pasteboard = (ObjC.classes.UIPasteboard).generalPasteboard();
    var latest_word = "";

    setInterval(function()
    {
        try
        {
            var on_pasteboard = pasteboard.string().toString()

            if(on_pasteboard != latest_word)
            {
                console.log("[*] Found on pasteboard: "+ on_pasteboard);
                latest_word = on_pasteboard;
            }
        }
        catch(err)
        {
            a = "";
        }
    }, interval_value);
}

//start_pasteboard_monitoring(INTERVAL_VALUE_HERE_MILLISECONDS)
start_pasteboard_monitoring(2000)
