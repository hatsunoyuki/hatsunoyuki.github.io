var randomlink = [
	"http://ak.mooncell.wiki/",
	"https://ak.hypergryph.com/",
	"http://bbs.nga.cn/thread.php?fid=-34587507&rand=471",
]

function YukiRandomLink() {
    $("#yuki_randomlink").attr(
        "href",
        randomlink[Math.floor(Math.random() * randomlink.length)]
    );
}
