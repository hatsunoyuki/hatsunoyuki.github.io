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
                var btnbackvalue= styles.getPropertyValue("--"+ele.id+"-btnback");
                document.documentElement.style.setProperty("--background",backvalue);
				document.documentElement.style.setProperty("--theme-color",fontvalue);
				document.documentElement.style.setProperty("--hover-color",hovervalue);
				document.documentElement.style.setProperty("--light-color",lightvalue);
				document.documentElement.style.setProperty("--button-color",buttonvalue);
				document.documentElement.style.setProperty("--trans-color",transvalue);
				document.documentElement.style.setProperty("--medium-color",mediumvalue);
				document.documentElement.style.setProperty("--border-color",bordervalue);
				document.documentElement.style.setProperty("--btnback-color",btnbackvalue);
            })
        }
		
$(function(){
	init();// 页面加载时开始在div上随机排布星星
});

function init(){// 函数：初始化函数
	for(var i=1;i<=25;i++){// 页面图片的总数
		// 通过getNum函数获取图片xy轴的坐标。
		var windowidth = document.body.clientWidth;
		var windowheight = document.body.clientHeight;
			x = getNum(windowidth)-20; 
			y = getNum(windowheight)-20; 
			w = getNum(15)+10;
		// 追加到div容器中。
		$("<img/>",{"class":"randomstar","id":"img"+i,"src":"data:image/png;base64,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"}).appendTo("body").css({"top":y,"left":x,"position":"absolute","width":w,"height":w,"opacity":"0.5","user-select":"none", "pointer-events": "none"});
	}
};
// 函数：主动创建符合要求的整数，并返回。
function getNum(limit){
	var num;
	while(true){
		num=Math.random()*9000;
		if(num<=limit&&num>0){
			break;
		}
	}
	return parseInt(num);
};
		
window.onload=function(){ 
setInterval(function(){  
var date=new Date();  
var year=date.getFullYear(); //获取当前年份  
var mon=date.getMonth()+1; //获取当前月份  
var da=date.getDate(); //获取当前日  
var h=date.getHours(); //获取小时  
var m=date.getMinutes(); //获取分钟  
var s=date.getSeconds();
var d=document.getElementById('stime');  
d.innerHTML=''+year+'-'+t(mon)+'-'+t(da)+' '+t(h)+':'+t(m)+':'+t(s); },1000) }

function t(s){//日期两位数
    return s<10?"0"+s:s;
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
		[/芙芙/gi, '可莉'],
        [/茜茜/gi, '贝贝'],
		[/微微/gi, '温温'],
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