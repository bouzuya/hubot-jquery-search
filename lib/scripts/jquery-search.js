// Description
//   A Hubot script that search jQuery API from api.jquery.com
//
// Configuration:
//   None
//
// Commands:
//   ?jq <keyword> - search jQuery API
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var cheerio, request;
  request = require('request-b');
  cheerio = require('cheerio');
  return robot.hear(/^\?jq(?:uery)?\s+(\S+)$/i, function(res) {
    var keyword, searchUrl;
    keyword = res.match[1];
    searchUrl = "http://api.jquery.com/?s=" + (encodeURIComponent(keyword));
    return request({
      method: 'GET',
      url: searchUrl
    }).then(function(r) {
      var $, message, posts;
      posts = [];
      $ = cheerio.load(r.body);
      $('#content .post').each(function() {
        var a, p, post, summary, title, url;
        post = $(this);
        a = post.find('.entry-title a');
        p = post.find('.entry-summary p');
        url = 'http' + a.attr('href');
        title = a.text();
        summary = p.text();
        return posts.push({
          url: url,
          title: title,
          summary: summary
        });
      });
      message = posts.filter(function(_, i) {
        return i < 5;
      }).map(function(i) {
        return "" + i.title + " : " + i.summary + "\n  " + i.url;
      }).join('\n');
      return res.send(searchUrl + '\n' + message);
    });
  });
};
