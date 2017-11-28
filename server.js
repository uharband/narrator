var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var request = require('request');

var contents = fs.readFileSync(path.join(__dirname, 'snippets', 'html.txt'), 'utf8');

app.use(express.static('public'));
app.use(express.static('data'));

app.get('/', function (req, res) {
  res.send('Hello World! try my /ping api!')
});

app.get('/ping', function (req, res) {
    var time = process.uptime();
    res.send('ok. seconds up: ' + time.toString());
});


app.get('/manage/alive', function (req, res) {
    var live = {};
    live.message = "narrator is alive!";
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(live));
});

app.get('/manage/health', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(statusObj));
});

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
// upload an audio file
app.post('/upload', function(req, res) {
    var name = req.query.name;
    var base64Name = (new Buffer(name).toString('base64')) + '.mp4';
    if(name === undefined){
        base64Name = recording.mp4;
    }
    req.pipe(fs.createWriteStream(__dirname + path.sep + 'data'  + path.sep + base64Name));
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('OK!');
});


app.get('/article', function(req, res){

    var url = req.query.path;

    request(url, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        body = body.replace("<div class='art_header_footer_facebook'>", contents.replace('audioFile', (new Buffer(url).toString('base64')) + '.mp4') + "<div class='art_header_footer_facebook'>");
        res.send(body);
    });

});


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (!fs.existsSync(__dirname + path.sep + 'data')){
    fs.mkdirSync(__dirname + path.sep + 'data');
}

app.listen(server_port, function () {
    initiateStatus();
    console.log('Example app listening on port ' + server_port + '! try my / api!')
});

var statusObj = {};

function initiateStatus(){
    statusObj.status = "UP";
    statusObj.initialReadiness = {};
    statusObj.initialReadiness.status = "UP";
    statusObj.initialReadiness.lastStatusUpdate = new Date().toISOString();
}

