# Description
#   A Hubot script that search jQuery API from api.jquery.com
#
# Configuration:
#   None
#
# Commands:
#   ?jq <keyword> - search jQuery API
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  request = require 'request-b'
  cheerio = require 'cheerio'

  robot.hear /^\?jq(?:uery)?\s+(\S+)$/i, (res) ->
    keyword = res.match[1]
    searchUrl = "http://api.jquery.com/?s=#{encodeURIComponent(keyword)}"
    request
      method: 'GET'
      url: searchUrl
    .then (r) ->
      posts = []
      $ = cheerio.load r.body
      $('#content .post').each ->
        post = $ @
        a = post.find('.entry-title a')
        p = post.find('.entry-summary p')
        url = 'http' + a.attr('href')
        title = a.text()
        summary = p.text()
        posts.push { url, title, summary }
      message = posts
        .filter (_, i) -> i < 5
        .map (i) ->
          """
          #{i.title} : #{i.summary}
            #{i.url}
          """
        .join '\n'
      res.send searchUrl + '\n'+ message
