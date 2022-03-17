document.addEventListener('visibilitychange',function(){
    if( document.visibilityState == 'hidden' ){
        normal_title = document.title;
        document.title = 'NekosPlayingAround(～￣▽￣)～ ';
    }else{
        document.title = 'MoreNekosComing!Σ(っ°Д°;)っ';
        setTimeout(function(){
            document.title = normal_title;
        }, 1500)
    }
});

$(document).ready(function() {/* 鼠标样式 */
	$('*').hover(
        function() {
            $(this).css({
                cursor: "url(myblog/imgfile/cursor_ak.png),auto"
                    })
                },
       )
    })

$(function(){
	init();// 页面加载时开始在div上随机排布星星
});

function init(){// 函数：初始化函数
	for(var i=1;i<=25;i++){// 页面图片的总数
		// 通过getNum函数获取图片xy轴的坐标。
		var windowidth = document.body.clientWidth;
			x = getNum(windowidth)-20; 
			y = getNum(1500); 
			w = getNum(15)+10;
		// 追加到div容器中。
		$("<img/>",{"class":"randomstar","id":"img"+i,"src":"https://pic.imgdb.cn/item/623318cb5baa1a80ab34b97a.png"}).appendTo(".main").css({"top":y,"left":x,"position":"absolute","width":w,"height":w});
	}
};
// 函数：主动创建符合要求的整数，并返回。
function getNum(limit){
	var num;
	while(true){
		num=Math.random()*9000;
		if(num<=limit&&num>0){
			break;
		}
	}
	return parseInt(num);
};

// Time
$(document).ready(function(){ 
	setInterval(function(){  
	var date=new Date();  
	var year=date.getFullYear(); //获取当前年份  
	var mon=date.getMonth()+1; //获取当前月份  
	var da=date.getDate(); //获取当前日  
	var h=date.getHours(); //获取小时  
	var m=date.getMinutes(); //获取分钟 
	var day = date.getDay(); //当前系统时间中的星期值
	var weeks = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
	var week = weeks[day]; 
	var d=document.getElementById('timeText');
	var ymd=document.getElementById('dateText');
	d.innerHTML=''+t(h)+':'+t(m); 
	ymd.innerHTML=''+t(week)+' '+year+'.'+t(mon)+'.'+t(da); 
	})
});

function t(s){//日期两位数
    return s<10?"0"+s:s;
};

	
