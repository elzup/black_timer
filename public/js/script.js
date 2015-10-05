window.onload = function() {
  setInterval('showClock()',1000);
  setInterval('changeUmaru()',2000);
  setTimeout("location.reload()", 10 * 60 * 1000);
  document.getElementById("limitTime").innerHTML = getTimeStr(limitTime);
};
var limitTime = new Date(2015, 7 - 1, 29, 23, 0, 0);
var SECOND_MILLISECOND = 1000,
    MINUTE_MILLISECOND = 60 * SECOND_MILLISECOND,
    HOUR_MILLISECOND = 60 * MINUTE_MILLISECOND,
    DAY_MILLISECOND = 24 * HOUR_MILLISECOND,
    WEEK_MILLISECOND = 7 * DAY_MILLISECOND,
    YEAR_MILLISECOND = 365 * DAY_MILLISECOND;

var dateDistance = function (diff) {
      return Math.floor(diff % YEAR_MILLISECOND / DAY_MILLISECOND)
    },
    hourDistance = function (diff) {
      return Math.floor(diff % DAY_MILLISECOND / HOUR_MILLISECOND)
    },
    minuteDistance = function (diff) {
      return Math.floor(diff % HOUR_MILLISECOND / MINUTE_MILLISECOND)
    },
    secondDistance = function (diff) {
      return Math.floor(diff % MINUTE_MILLISECOND / SECOND_MILLISECOND)
    },
    millisecondDistance = function (diff) {
      return dst.getTime() - src.getTime()
    };
function showClock() {
  var nowTime = new Date();
  var msg = getTimeStr(nowTime);
  var msg2 = getTimeStr2(limitTime, nowTime);
  document.getElementById("clock").innerHTML = msg;
  document.getElementById("leastClock").innerHTML = msg2;
};

function changeUmaru() {
  if (document.getElementById("umaru")) {
    var rx = Math.floor(Math.random() * 3);
    var ry = Math.floor(Math.random() * 2);
    document.getElementById("umaru").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px";
  }
  if (document.getElementById("umaru2")) {
    rx = Math.floor(Math.random() * 3);
    ry = Math.floor(Math.random() * 2);
    document.getElementById("umaru2").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px";
  }
  if (document.getElementById("umaru3")) {
    rx = Math.floor(Math.random() * 3);
    ry = Math.floor(Math.random() * 2);
    document.getElementById("umaru3").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px";
  }
};

function getTimeStr(time) {
  var nowDate = time.getDate();
  var nowMonth = time.getMonth() + 1;
  var nowHour = time.getHours();
  var nowMin = time.getMinutes();
  var nowSec = time.getSeconds();
  return c2(nowMonth) + "/" + c2(nowDate) + " " + c2(nowHour) + ":" + c2(nowMin) + ":" + c2(nowSec);
}

function getTimeStr2(src, dst) {
  var diff = src.getTime() - dst.getTime();
  return c2(dateDistance(diff)) + "day " + c2(hourDistance(diff)) + ":" + c2(minuteDistance(diff)) + ":" + c2(secondDistance(diff));
}

function c2(a) {
  return ("0" + a).slice(-2);
}
