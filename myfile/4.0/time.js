function currentDate() {
    var myDate = new Date();
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    var day = myDate.getDay(); //当前系统时间中的星期值
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var week = weeks[day]; //根据星期值，从数组中获取对应的星期字符串
    var hour = myDate.getHours(); //获取当前小时数(0-23)
    var minute = myDate.getMinutes(); //获取当前分钟数(0-59)
    var second = myDate.getSeconds(); // var second = myDate.getSeconds(); //获取当前秒
    if (hour < 10) {
        var hour = 0 + "" + hour;
    }
    if (minute < 10) {
        var minute = 0 + "" + minute;
    }
    if (second < 10) {
        var second = 0 + "" + second;
    }
    if (mon < 10) {
        var mon = 0 + "" + mon;
    }
    if (date < 10) {
        var date = 0 + "" + date;
    }
    // console.log(year, week, date)
 
}
setInterval(currentDate, 1000);


$("#sdate").html(year + "-" + mon + "-" + date);
$("#sday").html(week);
$("#stime").html(hour + ":" + minute + ":" + second);

