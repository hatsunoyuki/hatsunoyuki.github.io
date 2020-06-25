document.title='H岛模拟测试demo';

$(document).ready(function(){/* 随机立绘 */
          var bodyBgs = [];
        bodyBgs[0] = "https://s1.ax1x.com/2020/06/24/Nw1zM8.md.png";
        bodyBgs[1] = "https://s1.ax1x.com/2020/06/25/NBQrSP.md.png";
		bodyBgs[2] = "https://s1.ax1x.com/2020/06/25/NBlSl6.md.png";
		bodyBgs[3] = "https://s1.ax1x.com/2020/06/25/NB4uvR.md.png";
		bodyBgs[4] = "https://s1.ax1x.com/2020/06/25/NB4zdK.md.png";


        var randomBgIndex = Math.round( Math.random() * 4 );
         var bg='url('+bodyBgs[randomBgIndex]+')';
         $(".themenu").css("background-image",bg);
});



function YukiRandomLink() {
    $(".linkPRST").attr(
        "href", "ak.mooncell.wiki/");
    );
}


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



