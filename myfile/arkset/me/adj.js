document.title='H岛模拟测试demo';

    let self = this;
    document.addEventListener('touchstart', (e) => {
      self.moveY = e.targetTouches[0].pageY;
    })
    document.addEventListener('touchmove', (e) => {
      e.preventDefault();
      let moveWidth = self.moveY - e.targetTouches[0].pageY;
      if (moveWidth !== 0) {
        document.body.scrollTop += moveWidth;
      }
    })
 
$(document).ready(function(){
          var bodyBgs = [];
        bodyBgs[0] = "https://s1.ax1x.com/2020/06/24/Nw1zM8.md.png";
        bodyBgs[1] = "https://s1.ax1x.com/2020/06/25/NBQrSP.md.png";
		bodyBgs[2] = "https://s1.ax1x.com/2020/06/25/NBlSl6.md.png";


        var randomBgIndex = Math.round( Math.random() * 2 );
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
d.innerHTML=''+year+'/'+mon+'/'+da+' '+h+':'+m; },1000) }


$(".container")[1].id='fstcon';

$(".topic").before("<br>");

$("#keep_status").append("<div class='titleme'><p>★★★★★★</p></div>");



