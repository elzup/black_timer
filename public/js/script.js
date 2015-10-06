window.onload = function () {
    // repeat every 1sec
    setInterval('showClock()', 1000);

    // repeat every 2sec
    // TODO: constans
    setInterval('changeUmaru()', 2000);

    // page reload every 1hour for sync shifted time
    setTimeout("location.reload()", 10 * 60 * 1000);

    // TODO: from REST param
    momentLimit = moment('2015-10-08 00:00:00');
    document.getElementById("limitTime").innerHTML = momentLimit.format("MM-DD HH:mm:ss");
};
var momentLimit;
// limit target date
var SECOND_MILLISECOND = 1000,
    MINUTE_MILLISECOND = 60 * SECOND_MILLISECOND,
    HOUR_MILLISECOND = 60 * MINUTE_MILLISECOND,
    DAY_MILLISECOND = 24 * HOUR_MILLISECOND,
    WEEK_MILLISECOND = 7 * DAY_MILLISECOND,
    YEAR_MILLISECOND = 365 * DAY_MILLISECOND;

function showClock() {
    var momentNow = moment();
    // TODO: to constains
    var msg = momentNow.format("MM-DD HH:mm:ss");
    var msg2 = getTimeStr2(momentNow, momentLimit);
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

// TODO: rename
function getTimeStr2(momentSource, momentTarget) {
    return '%dDays %02d:%02d:%02d'.format(
        momentTarget.diff(momentSource, 'days'),
        momentTarget.diff(momentSource, 'hours'),
        momentTarget.diff(momentSource, 'minutes'),
        momentTarget.diff(momentSource, 'seconds')
    );
}

