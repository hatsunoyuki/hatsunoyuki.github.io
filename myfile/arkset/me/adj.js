document.title='H岛模拟测试demo';

 var bodyBgs = [];
        bodyBgs[0] = "https://s1.ax1x.com/2020/06/24/Nw1zM8.png";
        bodyBgs[1] = "https://s1.ax1x.com/2020/06/25/NBQrSP.png";
		bodyBgs[2] = "https://s1.ax1x.com/2020/06/25/NBlSl6.png";


        var randomBgIndex = Math.round( Math.random() * 2 );

    //输出随机的背景图
        document.write('<style>.themenu{background:url(' + bodyBgs[randomBgIndex] + ') no-repeat}</style>');

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


