document.title='#2';

document.addEventListener("visibilitychange", function(){
    document.title = document.hidden ? "连接中断" : "#2";
});

$(document).ready(function(){/* 随机立绘 */
          var bodyBgs = [];
        bodyBgs[0] = "myfile/arkset/me/img/char_pramanix_skin1.png";
        bodyBgs[1] = "myfile/arkset/me/img/char_pramanix_skin1.png";
        bodyBgs[2] = "myfile/arkset/me/img/char_pramanix_2b.png"; 
        bodyBgs[3] = "myfile/arkset/me/img/char_pramanix_2b.png"; 
        bodyBgs[4] = "myfile/arkset/me/img/char_pramanix_1a.png";
        var randomBgIndex = Math.round( Math.random() * 4 );
         var bg='url('+bodyBgs[randomBgIndex]+')';
         $(".themenu").css("background-image",bg);
});

window.onload=function(){ 
setInterval(function(){  
var date=new Date();  
var year=date.getFullYear(); //获取当前年份  
var mon=date.getMonth()+1; //获取当前月份  
var da=date.getDate(); //获取当前日  
var h=date.getHours(); //获取小时  
var m=date.getMinutes(); //获取分钟  
var d=document.getElementById('time');  
d.innerHTML=''+year+'/'+t(mon)+'/'+t(da)+' '+t(h)+':'+t(m); },1000) }

function t(s){//日期两位数
    return s<10?"0"+s:s;
    }
	

function shop(){
    alert('您就是氪金母猪嗷');
}

function team(){
    alert('👴还没想好放啥');
}
  
function tips(){   
    window.open ('myfile/arkset/me/tips.html', 'newwindow', 'height=600px, width=400px, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')    
}



$(".container")[1].id='fstcon';

$(".topic").before("<br>");

$("#keep_status").append("<div class='titleme'><p>★★★★★★</p></div>");


