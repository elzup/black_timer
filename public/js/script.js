var momentLimit;
var params;
var $remainClock, $remainClockD, $remainClockH, $remainClockM, $remainClockS;

// constains
var TIME_FORMAT = "MM-DD HH:mm:ss";

var UPDATE_IMAGE_INTERVAL = 5000; // ms
var PAGE_RELOAD_INTERVAL  = 10 * 60 * 1000; // ms, 10 minutes

var PARAM_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ss';
$(function() {
    initializeParams();
    initializeRender();
    setupIntervals();
    eventSetup();
});

function initializeParams() {
    params = (new Url).query;
    if (params['name'] == null) {
        addAlert('param "name" is Empty.')
    }
    // optional value set
    var unIsNull = params['un'] == null;
    params['un'] = parseInt(params['un']);
    var unInRange = 0 <= params['un'] && params['un'] <= 6;
    if (!unIsNull && (isNaN(params['un']) || !unInRange)) {
        addAlert('param "un" is Invalid(' + params['un'] + '). [0 <= un <= 6]')
    }
    if (unIsNull || isNaN(params['un'])) {
        params['un'] = 2;
    }
    if (!unInRange) {
        params['un'] = Math.max(0, Math.min(6, params['un']));
    }
    if (!isNaN(Date.parse(params['end-time']))) {
        momentLimit = moment(params['end-time']);
    } else {
        momentLimit = moment().add(1, 'hour');
        if (params['end-time'] != null && params['end-time'] != '') {
            // end-time param set and invalid
            addAlert('param "end-time" is Invalid(' + params['end-time'] + '). format[' + PARAM_TIME_FORMAT + ']');
        }
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
    $("#limitTime").html(momentLimit.format(TIME_FORMAT));
    $("#name").text(params['name']);
    $umaru = $('<div/>').addClass('umaru');
    for (var i = 0; i < params['un']; i ++) {
        $('#umaru-box').append($umaru.clone());
    }
    $remainClock = $('#limit');
    $remainClockD = $remainClock.children('.days');
    $remainClockH = $remainClock.children('.hours');
    $remainClockM = $remainClock.children('.minutes');
    $remainClockS = $remainClock.children('.seconds');
}

function updateClock() {
    var momentNow = moment();
    var nowTimeStr = momentNow.format(TIME_FORMAT);
    var rd = momentLimit.diff(momentNow, 'days');
    var rh = momentLimit.diff(momentNow, 'hours') % 24;
    var rm = momentLimit.diff(momentNow, 'minutes') % 60;
    var rs = momentLimit.diff(momentNow, 'seconds') % 60;

    // udpate view
    $("#clock").text(nowTimeStr);
    $remainClockD.text(rd);
    $remainClockH.text(rh);
    $remainClockM.text(rm);
    $remainClockS.text(rs);
    if (rd == 0 && !$remainClockD.hasClass('last-time')) {
        $remainClockD.addClass('last-time');
    }
    if ((rd | rh) == 0 && !$remainClockH.hasClass('last-time')) {
        $remainClockH.addClass('last-time');
    }
    if ((rd | rh | rm) == 0 && !$remainClockM.hasClass('last-time')) {
        $remainClockM.addClass('last-time');
    }
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

function eventSetup() {
    $('[data-toggle]').hide();
    $('html')
        .mouseover(function() {
            $('[data-toggle=mouse-on-window]').show();
        })
        .mouseout(function() {
            $('[data-toggle=mouse-on-window]').hide();
        })
}

function addAlert(message) {
    $alert = $("<div/>").addClass('alert').append($("<p/>").text(message));
    $("#alerts").append($alert);
}
