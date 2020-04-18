
$(document).ready(function () {
    var select = document.getElementById("duqian");
    var add = document.createElement("p");
    add.setAttribute("id", "yeDocarateDiv");
    select.before(add);
    add.innerHTML =
        '<div id="aa" style="display: none;">测试2</div>';


});
