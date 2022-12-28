/* 
    Description: iOS Keyboard Cache Observer
    Usage: frida -U -f XXX -l ios-keyboard-cache-checker.js
    Credit: ay-kay

    iterateInputTraits() - Iterate over all UITextView, UITextField (including UISearchBar) elements in the current view and check if keyboard caching is disabled on these text inputs

    Links:
        https://developer.apple.com/documentation/uikit/uitextautocorrectiontype/uitextautocorrectiontypeno
        https://developer.apple.com/documentation/uikit/uitextautocorrectiontype/uitextautocorrectiontypeyes
        https://developer.apple.com/documentation/uikit/uitextautocorrectiontype/uitextautocorrectiontypedefault
*/

function resolveAutocorrectionType(typeNr) 
{
    switch (parseInt(typeNr, 10)) 
    {
        case 1:
            return "UITextAutocorrectionTypeNo"
            break;
        case 2:
            return "UITextAutocorrectionTypeYes"
            break;
        default:
            return "UITextAutocorrectionTypeDefault"
    }
}

function iterateInputTraits() 
{
    var inputTraits = [ObjC.classes.UITextView, ObjC.classes.UITextField];

    inputTraits.forEach(function(inputTrait)
    {
        ObjC.choose(inputTrait, 
        {
            onMatch: function(ui) 
            {
                console.log("-".repeat(100));
                console.log(ui);
                console.log("is Editable: ", ui.isEditable());
                console.log("secureTextEntry: ", ui.isSecureTextEntry());
                console.log("autocorrectionType: " + ui.autocorrectionType() + " (" + resolveAutocorrectionType(ui.autocorrectionType()) + ")")
            },

            onComplete: function() 
            {
                console.log("-".repeat(100));
                console.log("Finished searching for " + inputTrait.toString() + " elements.");
            }
        });
    });
}