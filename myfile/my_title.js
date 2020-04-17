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
