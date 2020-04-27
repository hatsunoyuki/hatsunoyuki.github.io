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
            headHTML    += '<link rel="shortcut icon" href="https://i2.tiimg.com/712728/0b307add2a7b5e71.png" type="image/x-icon">';
			document.getElementsByTagName('head')[0].innerHTML = headHTML;

document.getElementById("btnyuki").onclick = function () { /* shimeji隐藏按钮 */
    if (this.value === "hideit") {
        document.getElementById("shimeji").style.display = "none";
        this.value = "showit";
    } else if (this.value === "showit") {
        document.getElementById("shimeji").style.display = "block";
        this.value = "hideit";
    }
};
