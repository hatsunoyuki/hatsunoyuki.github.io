$(document).pjax('a[target!=_blank]', '#app', {fragment: '#app',timeout: 8000}); //#wrap为刷新的id
    $(document).on('pjax:send', function() {
    $(".loading").css("display", "block");
    //预加载函数可写在这里
});

$(document).on('pjax:complete', function() {
    //回调函数
    $("img[src$=jpg],img[src$=jpeg],img[src$=png],img[src$=gif]").parent("a[class!=noview]").addClass("swipebox");
    if( $('pre').length ){ prettyPrint(); }     //回调函数解决文章页代码不高亮的问题
    $(".loading").css("display", "none");
    //pjax加载结束的回调函数 解决js无法定位的问题
    //重新定位容器内容的函数写在这里
});

