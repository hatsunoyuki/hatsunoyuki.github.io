
    function browserRedirect() {  
    var sUserAgent = navigator.userAgent.toLowerCase();  
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
    var bIsAndroid = sUserAgent.match(/android/i) == "android";  
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
    // document.writeln("您的浏览设备为：");  
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
      
    // alert("手机浏览！");  
      
    document.write('<script type="text/javascript" charset="utf-8" src="https://hatsunoyuki.github.io/myfile/3.0/main_v2.6beta.js"><\/script>');  
    } else {  
      
    // alert("PC浏览！");  
    document.write('<script type="text/javascript" charset="utf-8" src="https://hatsunoyuki.fun/myfile/arkset/arkui.js"><\/script>');  
    }  
    }  
    browserRedirect();  
