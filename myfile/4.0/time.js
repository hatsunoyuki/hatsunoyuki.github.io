window.onload=function(){ 
setInterval(function(){  
var date=new Date();  
var year=date.getFullYear(); //获取当前年份  
var mon=date.getMonth()+1; //获取当前月份  
var da=date.getDate(); //获取当前日  
var h=date.getHours(); //获取小时  
var m=date.getMinutes(); //获取分钟  
var s=date.getSeconds();
var d=document.getElementById('stime');  
d.innerHTML=''+year+'-'+t(mon)+'-'+t(da)+' '+t(h)+':'+t(m)+':'+t(s); },100) }

function t(s){//日期两位数
    return s<10?"0"+s:s;
    }
	