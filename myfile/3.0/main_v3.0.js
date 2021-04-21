$("#contentdiv").prepend('<script src="https://hatsunoyuki.fun/myfile/3.0/sl_emotion_v3.0.js"></script><script src="https://myhkw.cn/player/js/player.js" id="myhk" key="158361722577" m="1"></script>')

$(".po_topic_box > div.content_html_box").prepend('<script async src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script><script src="https://hatsunoyuki.fun/myfile/3.0/sl_emotion_py.js"></script><link rel="stylesheet" href="https://hatsunoyuki.fun/myfile/3.0/my_decorate_py.css"><div align="center"><a id="yuki_randomlink" target="_blank" onclick ="YukiRandomLink()"><p class="titleme">★只有猫猫知道的个人LOG★</p></a><p class=refont><font color="#DDA0DD">【爱猫猫 爱摸鱼 爱咕咕】</font><br><img src="https://s1.ax1x.com/2020/07/08/UVzsu8.md.png" class="banner"><br><img src="https://s1.ax1x.com/2020/05/13/YaTMvT.png" class="banner"><br><font color="#DDA0DD">【常用网址】</font><br><font color="#ff8080">个人楼</font><a href="https://myhitoo.com/showmsg/forumid/4/id/323379" target="_blank">①</a>&nbsp;<a href="https://myhitoo.com/showmsg/forumid/4/id/592661" target="_blank">②</a>&nbsp;<a href="https://myhitoo.com/showmsg/forumid/4/id/910211" target="_blank">③</a>｜<font color="#ff8080">代码试验田</font><a href="https://myhitoo.com/board/22" target="_blank">1.0</a>&nbsp;<a href="https://www.bilibilipy.net/b/22" target="_blank">2.0</a><br><a href="https://imgchr.com/" target="_blank">路过图床</a>｜<a href="http://www.txttool.com/wenben_delvbcrlf.asp" target="_blank">过滤换行</a>｜<a href="https://www.114la.com/other/rgb.htm" target="_blank">颜色代码</a><br><font color="#DDA0DD">【游戏相关】</font><br><a href="http://ak.mooncell.wiki/" target="_blank">RPTS</a>｜<a href="https://penguin-stats.cn/" target="_blank">企鹅物流</a>｜<a href="https://www.bigfun.cn/tools/aktools/hr" target="_blank">公招查询</a><br><a href="https://aog.wiki" target="_blank">素材一图流</a>｜<a href="https://kokodayo.fun/" target="_blank">kkdy资料站</a>｜<a href="https://hatsunoyuki.fun/daxigua/" target="_blank">合成大豹豹</a></p><font color="#888">本楼发言默认楼主精分!!</font></div>')


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

/* 开楼代码<script src="https://hatsunoyuki.fun/myfile/3.0/main_v3.0.js"></script> */