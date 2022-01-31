 document.addEventListener('DOMContentLoaded',function(){
            var oBox=document.getElementById('box2022');
        
            var C=7;
         
            var R=4;
         
            for(var i=0; i<R; i++){
                for(var j=0; j<C; j++){
                    var oSpan=document.createElement('span');
                  
                    oSpan.style.width=oBox.offsetWidth/C+'px';
                    oSpan.style.height=oBox.offsetHeight/R+'px';
                 
                    oSpan.style.left=j*oBox.offsetWidth/C+'px';
                    oSpan.style.top=i*oBox.offsetHeight/R+'px';
                    oBox.appendChild(oSpan);
                   
                    oSpan.style.backgroundPosition=-oSpan.offsetLeft+'px -'+oSpan.offsetTop+'px';
                }
            }
            var aSpan=oBox.children;
     
            var iNow=0;
     
            var bReady=true;
          
            oBox.onclick=function(){
                
                if(bReady==false){return;}
                bReady=false;
           
                iNow++;
                for(var i=0; i<aSpan.length; i++){
               
                    var x=aSpan[i].offsetLeft-oBox.offsetWidth/2;
                    var y=aSpan[i].offsetTop-oBox.offsetHeight/2;
             
                    aSpan[i].style.WebkitTransform='perspective(800px) translate('+x+'px,'+y+'px) rotateX('+rnd(-180,180)+'deg) rotateY('+rnd(-180,180)+'deg) scale(1.4)';
                    aSpan[i].style.WebkitTransition='1s all ease';
                    aSpan[i].style.opacity=0;
                }
            };
       
            aSpan[1].addEventListener('transitionend',function(){
                for(var i=0; i<aSpan.length; i++){
                   
                    aSpan[i].style.WebkitTransform='perspective(800px) translate(0px,0px) rotateX(0deg) rotateY(0deg) scale(1)';
                    aSpan[i].style.opacity=1;
                    
                    aSpan[i].style.WebkitTransition='none';
                   
                    aSpan[i].style.backgroundImage='url("https://s1.ax1x.com/2020/09/19/w5NlJs.jpg") no-repeat';
                    oBox.style.backgroundImage='url("https://s1.ax1x.com/2020/09/19/w5NlJs.jpg") no-repeat';
                    
                    bReady=true;
                }
            },false);
         
            function rnd(n,m){
                return parseInt(Math.random()*(m-n)+n);
            }
        },false);