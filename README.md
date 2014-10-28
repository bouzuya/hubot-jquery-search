# hubot-jquery-search

A Hubot script that search jQuery API from api.jquery.com

## Installation

    $ npm install https://github.com/bouzuya/hubot-jquery-search/archive/master.tar.gz

or

    $ npm install https://github.com/bouzuya/hubot-jquery-search/archive/{VERSION}.tar.gz

## Example

    bouzuya> ?jq ajax
      hubot> http://api.jquery.com/?s=ajax
             .ajaxComplete() : Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
               http://api.jquery.com/ajaxComplete/
             .ajaxError() : Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
               http://api.jquery.com/ajaxError/
             .ajaxSend() : Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
               http://api.jquery.com/ajaxSend/
             .ajaxStart() : Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
               http://api.jquery.com/ajaxStart/
             .ajaxStop() : Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
               http://api.jquery.com/ajaxStop/

## Configuration

See [`src/scripts/jquery-search.coffee`](src/scripts/jquery-search.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-jquery-search
[travis-badge]: https://travis-ci.org/bouzuya/hubot-jquery-search.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-jquery-search
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-jquery-search.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-jquery-search
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-jquery-search.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
