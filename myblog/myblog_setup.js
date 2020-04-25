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
            headHTML    += '<link rel="shortcut icon" href="imgfile/chiicon.png" type="image/x-icon">';
			document.getElementsByTagName('head')[0].innerHTML = headHTML;

$(document).ready(function() {/* 鼠标样式 */
	$('body').hover(
        function() {
            $(this).css({
                cursor: "url(/imgfile/cursor.ani),auto"
                    })
                },
       )
    })


