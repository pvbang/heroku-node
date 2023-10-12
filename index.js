var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res) {
    // Sử dụng path.join để xác định đường dẫn tới tệp index.html
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
