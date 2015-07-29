

setInterval 'changeUmaru()', 2000
setTimeout "location.reload()", 10 * 60 * 1000
(document.getElementById "limitTime").innerHTML = getTimeStr(limitTime)


# GET リクエストのパラメータの取得
@get_parameters = ->
  query = window.location.search.substring(1)
  raw_vars = query.split("&")
  params = {}
  for v in raw_vars
    [key, val] = v.split("=")
    params[key] = decodeURIComponent(val)
  params


params = @get_parameters
limitTime = new Date(2015, 7 - 1, 29, 23, 0, 0)

console.log params

SECOND_MILLISECOND = 1000
MINUTE_MILLISECOND = 60 * SECOND_MILLISECOND
HOUR_MILLISECOND = 60 * MINUTE_MILLISECOND
DAY_MILLISECOND = 24 * HOUR_MILLISECOND
WEEK_MILLISECOND = 7 * DAY_MILLISECOND
YEAR_MILLISECOND = 365 * DAY_MILLISECOND

dateDistance = (diff) ->
  Math.floor(diff % YEAR_MILLISECOND / DAY_MILLISECOND)
hourDistance = (diff) ->
  Math.floor(diff % DAY_MILLISECOND / HOUR_MILLISECOND)
minuteDistance = (diff) ->
  Math.floor(diff % HOUR_MILLISECOND / MINUTE_MILLISECOND)
secondDistance = (diff) ->
  Math.floor(diff % MINUTE_MILLISECOND / SECOND_MILLISECOND)
millisecondDistance = (diff) ->
  dst.getTime() - src.getTime()

showClock ->
  nowTime = new Date()
  msg = getTimeStr(nowTime)
  msg2 = getTimeStr2(limitTime, nowTime)
  document.getElementById("clock").innerHTML = msg
  document.getElementById("leastClock").innerHTML = msg2

changeUmaru ->
  if document.getElementById("umaru")
    rx = Math.floor(Math.random() * 3)
    ry = Math.floor(Math.random() * 2)
    document.getElementById("umaru").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px"
  if document.getElementById("umaru2")
    rx = Math.floor(Math.random() * 3)
    ry = Math.floor(Math.random() * 2)
    document.getElementById("umaru2").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px"

  if document.getElementById("umaru3")
    rx = Math.floor(Math.random() * 3)
    ry = Math.floor(Math.random() * 2)
    document.getElementById("umaru3").style.backgroundPosition = rx * 266 + "px " + ry * 300 + "px"

getTimeStr = (time) ->
  nowDate = time.getDate()
  nowMonth = time.getMonth() + 1
  nowHour = time.getHours()
  nowMin = time.getMinutes()
  nowSec = time.getSeconds()
  c2(nowMonth) + "/" + c2(nowDate) + " " + c2(nowHour) + ":" + c2(nowMin) + ":" + c2(nowSec)

getTimeStr2 = (src, dst) ->
  diff = src.getTime() - dst.getTime()
  c2(dateDistance(diff)) + "day " + c2(hourDistance(diff)) + ":" + c2(minuteDistance(diff)) + ":" + c2(secondDistance(diff))

c2 = (a) ->
  ("0" + a).slice(-2)

