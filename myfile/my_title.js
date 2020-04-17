document.title='✩世界征服~FluffyWorld✩';

document.addEventListener('visibilitychange',function(){
    if( document.visibilityState == 'hidden' ){
        normal_title = document.title;
        document.title = '猫猫持续增加中...';
    }else{
        document.title = '欢迎回到猫猫岛';
        setTimeout(function(){
            document.title = normal_title;
        }, 1500)
    }
});

var scrWidth = window.screen.width;  /* 标题icon */
            var headHTML = document.getElementsByTagName('head')[0].innerHTML;
            headHTML    += '<link rel="shortcut icon" href="http://i2.tiimg.com/712728/4da65a9fdc54126c.png" type="image/x-icon">';
			document.getElementsByTagName('head')[0].innerHTML = headHTML;
