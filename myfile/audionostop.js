$(document).pjax("#refresh", ".reply_list", {
    fragment: ".reply_list",
    timeout: 9000,
    scrollTo: "#dibu"
});

// $(document).pjax("center > div a", ".reply_list", {
//   fragment: ".reply_list",
//   timeout: 9000, async: false
// });
// $(document).pjax("center > div a", "center", {
//     fragment: "center",
//     timeout: 9000
//   });
$(document).on("submit", "form", function(event) {
    $.pjax.submit(event, ".reply_list", {
        fragment: ".reply_list",
        timeout: 9000,
        push: false,
        scrollTo: "#dibu"
    });
});
$(document).on("click", "center>div a", function(event) {
    var url = $(this).attr("href");
    $.pjax.reload("#app>center", {
        fragment: "center",
        timeout: 9000,
        url: url,
        async: false
    });
    $.pjax.reload(".reply_list", {
        fragment: ".reply_list",
        timeout: 9000,
        url: url
    });
    event.preventDefault();
});
// $("center>div a").click(function(event) {
//   var url = $(this).attr("href");
//   $.pjax.reload("#app>center", { fragment: "center",timeout: 9000, url: url, async: false });
//   $.pjax.reload(".reply_list", { fragment: ".reply_list", timeout: 9000,url: url });
//   event.preventDefault();
// });