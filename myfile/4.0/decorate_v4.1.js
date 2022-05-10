setInterval(showTime, 1000);

var btns = document.getElementsByClassName("theme-button");
        for(var i=0;i<btns.length;i++){
            btns[i].addEventListener("click",function(e){
                var ele = e.target||e.srcElement;
                var styles = getComputedStyle(ele);
                var backvalue = styles.getPropertyValue("--"+ele.id+"-background");
                var fontvalue= styles.getPropertyValue("--"+ele.id+"-font");
                var hovervalue= styles.getPropertyValue("--"+ele.id+"-hover");
                var lightvalue= styles.getPropertyValue("--"+ele.id+"-light");
                var buttonvalue= styles.getPropertyValue("--"+ele.id+"-button");
                var transvalue= styles.getPropertyValue("--"+ele.id+"-trans");
                var mediumvalue= styles.getPropertyValue("--"+ele.id+"-medium");
                var bordervalue= styles.getPropertyValue("--"+ele.id+"-border");
                document.documentElement.style.setProperty("--background",backvalue);
				document.documentElement.style.setProperty("--theme-color",fontvalue);
				document.documentElement.style.setProperty("--hover-color",hovervalue);
				document.documentElement.style.setProperty("--light-color",lightvalue);
				document.documentElement.style.setProperty("--button-color",buttonvalue);
				document.documentElement.style.setProperty("--trans-color",transvalue);
				document.documentElement.style.setProperty("--medium-color",mediumvalue);
				document.documentElement.style.setProperty("--border-color",bordervalue);
            })
        }
		
// Time
$(document).ready(function(){   
	var date=new Date();  
	var year=date.getFullYear(); //获取当前年份  
	var mon=date.getMonth()+1; //获取当前月份  
	var da=date.getDate(); //获取当前日  
	var hour=date.getHours(); //获取小时  
	var minute=date.getMinutes(); //获取分钟 
	var day = date.getDay(); //当前系统时间中的星期值
	var weeks = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
	var week = weeks[day]; 
	var dateall=document.getElementById('timeText');
	var ymd=document.getElementById('dateText');
	dateall.innerHTML=''+t(hour)+':'+t(minute); 
	ymd.innerHTML=''+t(week)+' '+t(year)+'.'+t(mon)+'.'+t(da); 
});

function t(s){//日期两位数
    return s<10?"0"+s:s;
};
	
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
        [/小花花/gi, '大花花 '],
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