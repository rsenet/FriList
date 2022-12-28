/* 
    Description: Xamarin Android Multiple Jailbreak Detection ByPass
    Usage: frida -U -f XXX -l xamarin-android-multiple-root-bypass.js
    Credit: Unknown 
*/

Java.perform(function() 
{
    let monoModule = null

    Process.getModuleByName("libmonosgen-2.0.so").enumerateExports().forEach(ex => 
    {
        if (ex.name == 'mono_thread_attach')
            monoModule = ex
    })

    if (!monoModule) throw new Error('Can\'t find Mono runtime!')

    class ExNativeFunction 
{
        constructor(address, retType = 'void', argTypes = [], abi = 'default') 
        {
            const native = new NativeFunction(address, retType, argTypes, abi)

            native.address = address
            native.retType = retType
            native.argTypes = argTypes
            native.abi = abi

            native.nativeCallback = callback => 
            {
              return new NativeCallback(callback, retType, argTypes, abi)
            }

            native.intercept = (options = {}) => 
            {
              return Interceptor.attach(address, options)
            }

            native.replace = callback => 
            {
              return Interceptor.replace(address, native.nativeCallback(callback))
            }

            return native
        }
    }

    global.ExNativeFunction = ExNativeFunction

    let MonoApi = 
    {
        mono_assembly_foreach: ['void', ['pointer', 'pointer']],
        mono_assembly_get_image: ['pointer', ['pointer']],
        mono_class_from_name: ['pointer', ['pointer', 'pointer', 'pointer']],
        mono_class_get_method_from_name: ['pointer', ['pointer', 'pointer', 'int']],
        mono_compile_method: ['pointer', ['pointer']],
        mono_get_root_domain: ['pointer'],
        mono_string_new: ['pointer', ['pointer', 'pointer']],
        mono_domain_get: ['pointer'],
        mono_string_to_utf8: ['pointer', ['pointer']],
        mono_thread_attach: ['pointer', ['pointer']],
        mono_array_length: ['uint32', ['pointer']],
        mono_array_addr_with_size: ['pointer', ['pointer', 'int', 'uint32']]
        // ... I've omitted a lot of mono functions which are not used in this script
    }

    Object.keys(MonoApi).map(exportName => 
    {
        if (MonoApi[exportName] === null) 
        {
            MonoApi[exportName] = () => { throw new Error('Export signature missing: ' + exportName) }
        }
        else 
        {
            const addr = Module.findExportByName('libmonosgen-2.0.so', exportName)
            MonoApi[exportName] = !addr
                ? () => { throw new Error('Export not found: ' + exportName) }
                : MonoApi[exportName] = new ExNativeFunction(addr, ...MonoApi[exportName])
        }
    })

    MonoApi.mono_thread_attach(MonoApi.mono_get_root_domain()) // Make sure we are attached to mono.

    // =============================================================================
    // =============================================================================

    console.warn("\n\n *** XAMARIN ANTIROOT by Gand3lf *** \n")

    let DEBUG = false

    var assemblies = []
    MonoApi.mono_assembly_foreach(new NativeCallback(x => { assemblies.push(x) }, 'void', ['pointer', 'pointer']), NULL)

    function hook(namespace, klass, method, callbacks)
    {
        assemblies.forEach(x=>{
            var mono_img = MonoApi.mono_assembly_get_image(x)
            var mono_class = MonoApi.mono_class_from_name(mono_img,
                                                    Memory.allocUtf8String(namespace),
                                                    Memory.allocUtf8String(klass))
            if(mono_class != 0x0){
                if(DEBUG) console.log("Found class: " + klass)
                
                var methods = method.split("/")
                for(var i=0; i < methods.length; i++){
                    var mono_method = MonoApi.mono_class_get_method_from_name(mono_class, Memory.allocUtf8String(methods[i]), -1)
                    if (mono_method == 0x0){
                        if(DEBUG) console.log("*** Method \"" + methods[i] + "\" not found")
                        return
                    }
                    if(DEBUG) console.log("Method \"" + methods[i] + "\" found")
                    
                    var impl = MonoApi.mono_compile_method(mono_method)
                    Interceptor.attach(impl, {...callbacks})
                }            
            }
        })
    }

    var rootPackages = ["com.noshufou.android.su",
                        "com.thirdparty.superuser",
                        "eu.chainfire.supersu",
                        "eu.chainfire.suhide",
                        "com.koushikdutta.superuser",
                        "com.zachspong.temprootremovejb",
                        "com.ramdroid.appquarantine",
                        "com.topjohnwu.magisk",
                        "com.kingouser.com",
                        "com.geohot.towelroot",
                        "com.noshufou.android.su.elite",
                        "com.yellowes.su",
                        "com.kingroot.kinguser",
                        "com.kingo.root",
                        "com.smedialink.oneclickroot",
                        "com.zhiqupk.root.global",
                        "com.alephzain.framaroot",
                        "com.devadvance.rootcloak",
                        "com.devadvance.rootcloakplus",
                        "de.robv.android.xposed.installer",
                        "com.saurik.substrate",
                        "com.amphoras.hidemyroot",
                        "com.amphoras.hidemyrootadfree",
                        "com.formyhm.hiderootPremium",
                        "com.formyhm.hideroot",
                        "com.dimonvideo.luckypatcher",
                        "com.chelpus.lackypatch",
                        "com.ramdroid.appquarantinepro",
                        "com.android.vending.billing.InAppBillingService.COIN",
                        "com.blackmartalpha",
                        "org.blackmart.market",
                        "com.android.vending.billing.InAppBillingService.LUCK",
                        "com.allinone.free",
                        "com.repodroid.app",
                        "org.creeplays.hack",
                        "com.baseappfull.fwd",
                        "com.zmapp",
                        "com.dv.marketmod.installer",
                        "org.mobilism.android",
                        "com.android.wp.net.log",
                        "com.android.camera.update",
                        "cc.madkite.freedom",
                        "com.chelpus.luckypatcher",
                        "com.solohsu.android.edxp.manager",
                        "org.meowcat.edxposed.manager",
                        "com.xmodgame",
                        "com.cih.game_cih",
                        "com.charles.lpoqasert",
                        "catch_.me_.if_.you_.can_"]

    var rootBinaries = ["/system/bin/.ext/.su",
                        "/system/usr/we-need-root/su-backup",
                        "/system/xbin/mu",
                        "/system/su",
                        "/usr/bin/su",
                        "/system/app/Superuser.apk",
                        "/sbin/su",
                        "/system/bin/su",
                        "/system/xbin/su",
                        "/data/local/xbin/su",
                        "/data/local/bin/su",
                        "/system/sd/xbin/su",
                        "/system/bin/failsafe/su",
                        "/data/local/su",
                        "/su/bin/su",
                        "/system/bin/sudo",
                        "/system/bin/su",
                        "/system/xbin/sudo",
                        "/system/xbin/su",
                        "/sbin/sudo",
                        "/sbin/su",
                        "/system/sbin/sudo",
                        "/system/sbin/su",
                        "/vendor/bin/sudo",
                        "/vendor/bin/su",
                        "/odm/bin/sudo",
                        "/odm/bin/su",
                        "/vendor/xbin/sudo",
                        "/vendor/xbin/su",
                        "/system/etc/security/otacerts.zip"]

    hook('System', 'Environment', 'GetEnvironmentVariable', 
    {
        onEnter: function (args) 
        {
            this.block = false
            var variable_ptr = MonoApi.mono_string_to_utf8(args[0])
            var variable = Memory.readCString(variable_ptr)
            if(DEBUG) console.log('GetEnvironmentVariable(' + variable + ')')
            
            if(variable == 'PATH')
            {
                console.warn("Blocking PATH variable reading ...")
                this.block = true
            }
        },
        onLeave: function (retval) 
        {
            if(this.block)
            {
                retval.replace(NULL);
            }
        }
    })

    // hook different methods of the same class together with "/"
    hook('System.IO', 'File', 'Exists/Open', 
    {  
        onEnter: function (args)
        {
            var filename_ptr = MonoApi.mono_string_to_utf8(args[0])
            var filename = Memory.readCString(filename_ptr)

            if(DEBUG) console.log('Exists/Open(' + filename + ')')
            
            if(rootBinaries.includes(filename))
            {
                console.warn("Bypass check on file " + filename + "...")
                this.found = true
            }
        },
        onLeave: function (retval) 
        {
            if(this.found)
                retval.replace(0x0)
        }
    })

    hook('Android.Content.PM', 'PackageItemInfo', 'get_PackageName', 
    {
            onEnter: function (args) {},
            onLeave: function (retval) 
            {
                var package_name_ptr = MonoApi.mono_string_to_utf8(retval)
                var package_name = Memory.readCString(package_name_ptr)
                if(DEBUG) console.log('get_PackageName -> ' + package_name + '')
                
                if(rootPackages.includes(package_name))
                {
                    console.warn("Hidding package " + package_name + "...")
                    var domain = MonoApi.mono_domain_get()
                    var fake_pack = MonoApi.mono_string_new(domain, Memory.allocUtf8String("f4k3.p4ck4g3.n4m3"))
                    retval.replace(fake_pack);
                }
            }
    })

    hook('Android.OS', 'Build', 'get_Tags', 
    {
            onEnter: function (args) {},
            onLeave: function (retval) {
                var tag_value_ptr = MonoApi.mono_string_to_utf8(retval)
                var tag_value = Memory.readCString(tag_value_ptr)
                if(DEBUG) console.log('get_Tags -> ' + tag_value + '')
                
                if(tag_value.includes("test-keys"))
                {
                    console.warn("Patching tag test-keys ...")
                    var domain = MonoApi.mono_domain_get()
                    var fake_tag = MonoApi.mono_string_new(domain, Memory.allocUtf8String("release-keys"))
                    retval.replace(fake_tag);
                }
            }
    })

    // Check executed commands (here only to show how to do it in mono embedding style)
    /*hook('Java.Lang', 'Runtime', 'Exec', {
            onEnter: function (args) {
                var len = MonoApi.mono_array_length(args[1])
                var command = ""
                for(var i=0; i<len; i++){
                    var elem = MonoApi.mono_array_addr_with_size(args[1], 4, i)
                    var monostr_ptr = Memory.readPointer(elem)
                    var str_ptr = MonoApi.mono_string_to_utf8(monostr_ptr)
                    var str = Memory.readCString(str_ptr)
                    command += str + " "
                }
                console.log("Command executed: " + command)
            },
            onLeave: function (retval) {}
    })*/

    // ANTI - DEBUGGING

   /*hook('System.Diagnostics', 'Debugger', 'get_IsAttached', {
            onEnter: function (args) {},
            onLeave: function (retval) {
                if(retval != 0x0){
                    console.warn("Bypassing Debugger.IsAttached ...")
                    retval.replace(0x0)
                }
            }
    })*/

})