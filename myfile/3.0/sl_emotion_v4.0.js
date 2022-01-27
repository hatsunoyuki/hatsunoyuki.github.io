var snow_lp = "";

$(document).ready(function () {
	$("div.title").before("<div align='center' id='snow'></div>");
    $("#snow").html(snow_lp);
    $(".emotion_tab:last()").after('<div id="snow01"></div>');
    $(".emotion_tab:last()").after("<li id='snow02' class='emotion_tab'>豹豹抱抱</li>");
    $("#fanbai").on("click", function () {
        $("textarea:last()").val($("textarea:last()").val() + '<p id="fbai"></p>');
    });
    $("#zhedie").on("click", function () {
        $("textarea:last()").val($("textarea:last()").val() + '<details><summary>Click to open</summary>内容</details>');
    });
    $("#shanchu").on("click", function () {
        $("textarea:last()").val($("textarea:last()").val() + '<s></s>');
    });
    $("#lianjie").on("click", function () {
        $("textarea:last()").val($("textarea:last()").val() + '<a href="地址" target="_blank">点就看</a>');
    });
    $("#snow02").on("click", function() {
      var imglist = [


      ];
      $("#snow01").empty();
      for (var b = 0; b < imglist.length; b++) {
        var snowemo =
          "<img src='" +
          imglist[b] +
          "' class='emot-class' Onclick='addemot(\"" +
          imglist[b] +
          "\")'>";
        $("#snow01").append(snowemo);
      }
      $("#snow01").append(
        '常用:<font id="shanchu" color="#4682B4">删除</font>&nbsp;&nbsp;<font id="zhedie" color="#4682B4">折叠</font>&nbsp;&nbsp;<font id="lianjie" color="#4682B4">点就看</font>&nbsp;&nbsp;<font id="fanbai" color="#4682B4">反白</font>'
      );
      $("#shanchu").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<s></s>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#zhedie").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<details><summary>Click to open</summary>内容</details>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#lianjie").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<a href="地址" target="_blank">点就看</a>'
        );
        $(".am-tabs-bd").hide();
      });
      $("#fanbai").on("click", function() {
        $("textarea:last()").val(
          $("textarea:last()").val() +
            '<p id="fbai"></p>'
        );
        
      });
      
    });
});
