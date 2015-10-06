var momentLimit;
var params;

// constains
var TIME_FORMAT = "MM-DD HH:mm:ss";
var REMAINING_TIME_FORMAT = '%dDays %02d:%02d:%02d'; // call "Days", "Hour", "Minutes", "Seconds"

var UPDATE_IMAGE_INTERVAL = 5000; // ms
var PAGE_RELOAD_INTERVAL  = 10 * 60 * 1000; // ms, 10 minutes

window.onload = function () {
    initializeParams();
    initializeRender();
    setupIntervals();
};

function initializeParams() {
    params = (new Url).query;
    // optional value set
    if (params['un'] == null) {
        params['un'] = 2;
    }
}

function setupIntervals() {
    // repeat every 1sec
    setInterval('updateClock()', 1000);

    // repeat every 2sec
    setInterval('updateImage()', UPDATE_IMAGE_INTERVAL);

    // page reload every 1hour for sync shifted time
    setTimeout("location.reload()", PAGE_RELOAD_INTERVAL);
}

function initializeRender() {
    // TODO: from REST param
    momentLimit = moment(params['end-time']);
    console.log(momentLimit);
    $("#limitTime").html(momentLimit.format(TIME_FORMAT));
    $("#name").html(params['name']);
    $umaru = $('<div/>').addClass('umaru');
    for (var i = 0; i < params['un']; i ++) {
        $('#umaru-box').append($umaru.clone());
    }
}

function updateClock() {
    var momentNow = moment();
    var nowTimeStr = momentNow.format(TIME_FORMAT);
    var leastTimeStr = toDiffTimeStr(momentNow, momentLimit);

    // udpate view
    $("#clock").html(nowTimeStr);
    $("#leastClock").html(leastTimeStr);
}

function updateImage() {
    $('.umaru').each(function() {
        var rx = Math.floor(Math.random() * 3);
        var ry = Math.floor(Math.random() * 2);
        $(this).css({
            'backgroundPosition': rx * 266 + "px " + ry * 300 + "px"
        });
    });
}

function toDiffTimeStr(momentSource, momentTarget) {
    return REMAINING_TIME_FORMAT.format(
        momentTarget.diff(momentSource, 'days'),
        momentTarget.diff(momentSource, 'hours') % 24,
        momentTarget.diff(momentSource, 'minutes') % 60,
        momentTarget.diff(momentSource, 'seconds') % 60
    );
}

