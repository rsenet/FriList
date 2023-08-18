/* 
    Description: iOS Search Classes based on keywork
    Usage: frida -U -f XXX -l ios-search_class.js
    Credit: https://www.corellium.com/blog/ios-jailbreak-detection-bypass
*/

var search_class = ['Jailbreak'];

if (ObjC.available)
{
    for (var className in ObjC.classes)
    {
        if(Array.isArray(search_class) && search_class.length)
        {
            for (var i = 0; i < search_class.length; i++)
            {
                if(className.toLowerCase().includes(search_class[i].toLowerCase()))
                {
                    console.log(className)
                }
            }
        }
    }
}
