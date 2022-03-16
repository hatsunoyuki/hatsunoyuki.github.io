// 隐藏

    var btnintro = document.getElementById("btnintro");
    var intro = document.getElementById("intro");
    var engine = document.getElementById("engine");

    function show(){
        if(btnintro.value === "✧"){
            btnintro.value = "✦";
            /*设置setTimeout，让display先执行，opacity后执行*/
            intro.style.display = "block";
            engine.style.display = "none";
			
            setTimeout(function () {
                intro.style.opacity = 1;  
				engine.style.opacity = 0;
            },.1);

        }else{

            btnintro.value = "✧";

            intro.style.opacity = 0;
            engine.style.opacity = 1;
            /*隐藏需要先执行opacity，再执行display，否则无效*/
            setTimeout(function () {
                intro.style.display = "none";            
            },500);
			
			setTimeout(function () {
                engine.style.display = "block";
            },100);
        }
	};