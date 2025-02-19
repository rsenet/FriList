/* 
    Description: Android List All Methods inside all classes
    Usage: frida -U -f XXX -l android-find-all-classes-methods.js
    Credit: @interference-security
          : rsenet for improvement (Batch execution)
*/

setTimeout(function() {
    Java.perform(function () {
        console.log("[*] Initializing class enumeration...");

        var classList = [];
        var primitiveTypes = ["byte", "char", "double", "float", "int", "long", "short", "void", "boolean"];

        Java.enumerateLoadedClasses({
            onMatch: function (className) {
                if (!className.startsWith("[") &&
                    !primitiveTypes.includes(className) &&
                    !className.startsWith("android.") &&
                    !className.startsWith("com.android")
                ) {
                    classList.push(className);
                }
            },
            onComplete: function () {
                console.log("[+] Total classes found (filtered): " + classList.length);
                processClasses(classList);
            }
        });

        function processClasses(classes) {
            var batchSize = 20;
            var delay = 500;
            var index = 0;

            function processBatch() {
                if (index >= classes.length) {
                    console.log("[+] Finished listing all methods.");
                    return;
                }
                console.log(`[+] Processing batch ${index} to ${Math.min(index + batchSize, classes.length)}...`);
                for (var i = index; i < Math.min(index + batchSize, classes.length); i++) {
                    try {
                        var className = classes[i];
                        console.log("\n[+] Class: " + className);
                        var clazz = Java.use(className);
                        if (clazz) {
                            var methods = clazz.class.getDeclaredMethods();
                            for (var j = 0; j < methods.length; j++) {
                                console.log("    " + methods[j].toString());
                            }
                        }
                    } catch (e) {
                        console.log("    [!] Error accessing class: " + classes[i] + " - " + e);
                    }
                }
                index += batchSize;
                setTimeout(processBatch, delay);
            }
            processBatch();
        }
    });
}, 5000); // Délai de 5 secondes pour laisser le temps au chargement des classes
