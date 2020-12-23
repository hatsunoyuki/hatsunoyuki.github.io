    var i=1;
    var ipt=document.getElementsByTagName("u");
    var div=document.getElementsByTagName("p");
    ipt[0].onclick=function(){if(i%2==0){
        div[0].style="display:none";
      }else{
        div[0].style="display:block";
      }
      i++;
    }