// Create a web server that can respond to requests for /comments.json with a JSON-encoded array of comments

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url);
    if (urlObj.pathname === '/comments.json') {
        fs.readFile('comments.json', function(err, data) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.end('Server error');
            return;
        }
        res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
    }
);

server.listen(8080);
