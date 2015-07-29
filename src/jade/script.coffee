doctype html
html
  head
    meta(charset='UTF-8')
    title 論文Timer

link(href='http://fonts.googleapis.com/css?family=Josefin+Sans&subset=latin,latin-ext' rel='stylesheet' type='text/css')
link(rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8")
script(src="js/script.js")

body
  (id="wrapper")
    h1
      span.name ELZUP Taki Kawasumi
      | Alive
      span.white or
      span.red Dead?
      p Time:
        span(id="clock")
        p Limit:
        span(id="limitTime")
        p(id="limit") ☠:
        span(id="leastClock")
      div.flex
        div(id="umaru")
        div(id="umaru2")
        # div(id="umaru3")
