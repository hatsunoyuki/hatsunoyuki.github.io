document.addEventListener('visibilitychange',function(){
    if( document.visibilityState == 'hidden' ){
        normal_title = document.title;
        document.title = '猫猫增殖中(～￣▽￣)～ ';
    }else{
        document.title = '奇怪的猫猫增加了!Σ(っ°Д°;)っ';
        setTimeout(function(){
            document.title = normal_title;
        }, 1500)
    }
});

var scrWidth = window.screen.width;  /* 标题icon */
var headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML    += '<link rel="shortcut icon" href="myblog/imgfile/chiicon.png" type="image/x-icon">';


$(document).ready(function() {/* 鼠标样式 */
	$('body').hover(
        function() {
            $(this).css({
                cursor: "url(myblog/imgfile/cursor.ani),auto"
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
		$("<img/>",{"class":"randomstar","id":"img"+i,"src":"file:///C:/Users/26890/Documents/GitHub/hatsunoyuki.github.io/hatsunoyuki.github.io/myblog/imgfile/star.png"}).appendTo(".main").css({"top":y,"left":x,"position":"absolute","width":w,"height":w});
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

