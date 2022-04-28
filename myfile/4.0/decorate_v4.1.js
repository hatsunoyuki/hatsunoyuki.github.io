var btns = document.getElementsByClassName("theme-button");
        for(var i=0;i<btns.length;i++){
            btns[i].addEventListener("click",function(e){
                var ele = e.target||e.srcElement;
                var styles = getComputedStyle(ele);
                var backvalue = styles.getPropertyValue("--"+ele.id+"-background");
                var fontvalue= styles.getPropertyValue("--"+ele.id+"-font");
                document.documentElement.style.setProperty("--background",backvalue);
				document.documentElement.style.setProperty("--theme-color",fontvalue);
            })
        }

	
var snowinner=document.createElement("small");
	snowinner.innerHTML='<font id="shanchu" color="#4682B4">删除</font>&nbsp;&nbsp;<font id="zhedie" color="#4682B4">折叠</font>&nbsp;&nbsp;<font id="lianjie" color="#4682B4">点就看</font>&nbsp;&nbsp;<font id="fanbai" color="#4682B4">反白</font>&nbsp;&nbsp;<font id="wenben" color="#4682B4">文本框</font>';    
	
$(".text-success").parents("div.reply_box").css("display","none");/* 隐藏已删除的楼层 */	

$(document).ready(function () {
    $(".emotion_tab:last()").after('<div id="snow01" style="display:none"></div>');
    $(".emotion_tab:last()").after("<li id='snow02' class='emotion_tab'>豹豹抱抱</li>");
	
    $("#snow02").on("click", function() {
		
      if($("#snow01").is(":hidden")){
      $("#snow01").show();
      $("#snow01").empty();/* 只出现一次 */
      $("#snow01").append(snowinner);	  
	  
      $("#shanchu").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<s></s>'
        );
        $("#snow01").hide();
      });
      $("#zhedie").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<details><summary>Click to open</summary>内容</details>'
        );
        $("#snow01").hide();
      });
      $("#lianjie").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<a href="地址" target="_blank">点就看</a>'
        );
        $("#snow01").hide();
      });
      $("#fanbai").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<font id="fbai"></font>'
        );
        $("#snow01").hide();
      });        
      $("#wenben").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<textarea class="form-control"></textarea>'
        );
        $("#snow01").hide();
      });	
	}else{
      $("#snow01").hide();     //如果元素为显现,则将其隐藏
	};	  
    });
});


var replaceArry = [
        [/testxx/gi, 'testyy'],
	];

$(".title").click(
		function swapname() {
		var numTerms = replaceArry.length;
		var txtWalker = document.createTreeWalker(
			document.body,
			NodeFilter.SHOW_TEXT, {
				acceptNode: function(node) {
					if(node.nodeValue.trim())
						return NodeFilter.FILTER_ACCEPT;

					return NodeFilter.FILTER_SKIP;
				}
			},
			false
		);
		var txtNode = null;


		while(txtNode = txtWalker.nextNode()) {
			var oldTxt = txtNode.nodeValue;

			for(var J = 0; J < numTerms; J++) {
				oldTxt = oldTxt.replace(replaceArry[J][0], replaceArry[J][1]);
			}
			txtNode.nodeValue = oldTxt;
		}
	
		setTimeout(swapname, 1000);
		setInterval(function() {
			document.addEventListener("scroll", swapname, true);
		}, 3000);
	});