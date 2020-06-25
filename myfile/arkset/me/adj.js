document.title='H岛模拟测试demo';


window.onload=function(){ 
setInterval(function(){  
var date=new Date();  
var year=date.getFullYear(); //获取当前年份  
var mon=date.getMonth()+1; //获取当前月份  
var da=date.getDate(); //获取当前日  
var h=date.getHours(); //获取小时  
var m=date.getMinutes(); //获取分钟  
var d=document.getElementById('time');  
d.innerHTML=''+year+'/'+mon+'/'+da+' '+h+':'+m; },1000) }


$(".container")[1].id='fstcon';

$(".topic").before("<br>");

$("#keep_status").append("<div class='titleme'><p>★★★★★★</p></div>");


				
var fontCfg = {
    p:'R8hVguNKZlfMuPoP',
        fonts: [
            {
                fontName: 'FZTYSJW' ,
                selecters: ['#li01','#li02','#li03']
            }
                ]
                    };
var myFont = new FTFont(fontCfg);

