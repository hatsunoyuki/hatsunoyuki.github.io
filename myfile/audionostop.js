$(document).pjax("#yerefresh", ".reply_list", {
    fragment: ".reply_list",
    timeout: 9000,
    scrollTo: "#dibu"
});

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
        url: "https://nmmnm.co/showmsg/forumid/22/id/404772",
        async: false
    });
    $.pjax.reload(".reply_list", {
        fragment: ".reply_list",
        timeout: 9000,
        url: "https://nmmnm.co/showmsg/forumid/22/id/404772",
    });
    event.preventDefault();
});
