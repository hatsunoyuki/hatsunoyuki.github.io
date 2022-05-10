var snowinner=document.createElement("small");
snowinner.innerHTML='<font id="shanchu" color="#4682B4">删除</font>&nbsp;&nbsp;<font id="zhedie" color="#4682B4">折叠</font>&nbsp;&nbsp;<font id="lianjie" color="#4682B4">点就看</font>&nbsp;&nbsp;<font id="fanbai" color="#4682B4">反白</font>&nbsp;&nbsp;<font id="wenben" color="#4682B4">文本框</font>';      
$(document).ready(function () {
	$(".text-success").parents("div.reply_box").css("display","none");/* 隐藏已删除的楼层 */	
    $(".emotion_tab:last()").after('<div id="snow01" style="display:none"></div>');
    $(".emotion_tab:last()").after("<li id='snow02' class='emotion_tab'>豹豹抱抱</li>");
	$(".main").parents(".btn_group").css("display","none");
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
		[/芙芙/gi, '可莉'],
        [/茶茶/gi, '魈宝'],
        [/茜茜/gi, '贝贝'],
        [/琪琪/gi, '甘雨'],
        [/塔塔/gi, '旅行者'],
        [/冥冥/gi, '胡桃'],
        [/曰曰/gi, '胡桃'],
        [/娜娜/gi, '七七'],
        [/某某/gi, '钟离'],
        [/妮妮/gi, '刻晴'],
        [/微微/gi, '温迪'],
        [/菲菲/gi, '烟绯'],
        [/e哥/gi, '空哥'],
        [/薇薇/gi, '温温'],
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