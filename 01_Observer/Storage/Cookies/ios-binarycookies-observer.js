/* 
    Description: Show content of Cookies.binarycookies file
    Usage: frida -U -f XXX -l ios-binarycookies-observer.js
    Credit: @interference-security

    Link:
        https://developer.apple.com/documentation/foundation/nshttpcookiestorage
*/

function show_binarycookies()
{
    var cookies = ObjC.classes.NSHTTPCookieStorage.sharedHTTPCookieStorage().cookies();
    for (var i=0; i<cookies.count(); i++)
    {
        console.log((cookies['- objectAtIndex:'](i)).toString())
    }
}

show_binarycookies()
