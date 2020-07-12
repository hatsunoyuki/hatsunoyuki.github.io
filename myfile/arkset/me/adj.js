document.title='#2';

var url = document.URL;
$("#refresh").attr("href", url);


$(document).ready(function(){/* 随机立绘 */
          var bodyBgs = [];
        bodyBgs[0] = "https://s1.ax1x.com/2020/06/24/Nw1zM8.md.png";
        bodyBgs[1] = "https://s1.ax1x.com/2020/06/25/NBQrSP.md.png";
		bodyBgs[2] = "https://s1.ax1x.com/2020/06/25/NBlSl6.md.png";
		bodyBgs[3] = "https://s1.ax1x.com/2020/06/25/NB4uvR.md.png";
		bodyBgs[4] = "https://s1.ax1x.com/2020/06/25/NB4zdK.md.png";


        var randomBgIndex = Math.round( Math.random() * 4 );
         var bg='url('+bodyBgs[randomBgIndex]+')';
         $(".themenu").css("background-image",bg);
});


function shop(){
    alert('您就是氪金母猪嗷');
}

function team(){
    alert('👴还没想好放啥');
}
  
function tips(){   
    window.open ('https://hatsunoyuki.fun/myfile/arkset/me/tips.html', 'newwindow', 'height=600px, width=400px, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no')    
}



$(".container")[1].id='fstcon';

$(".topic").before("<br>");

$("#keep_status").append("<div class='titleme'><p>★★★★★★</p></div>");


