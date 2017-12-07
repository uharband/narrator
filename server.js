var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
var request = require('request');

var contents = fs.readFileSync(path.join(__dirname, 'snippets', 'html.txt'), 'utf8');

var audioDirectory = __dirname + path.sep + 'data';
if(process.env.AUDIO_DIR !== undefined){
    audioDirectory = process.env.AUDIO_DIR;
}

console.log('after resolving env audioDirectory is ' + audioDirectory);


app.use(express.static('public'));
app.use(express.static('images'));
app.use(express.static(audioDirectory));

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
    var fileName = audioDirectory  + path.sep + base64Name;
    console.log('uploading audio file. name is ' + name + ', base64Name is ' + base64Name);
    req.pipe(fs.createWriteStream(fileName).on('finish', function() {
        var fileSize = getFileSize(fileName);
        console.log('done writing audio file. file with name ' + name + ' size is ' + fileSize);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OK! file size is ' + fileSize + ', base64 name is ' + base64Name);
    }));

});

// upload an audio file
app.post('/upload-default', function(req, res) {

    var fileName = audioDirectory  + path.sep + 'default.mp4';
    console.log('uploading default audio file');
    req.pipe(fs.createWriteStream(fileName).on('finish', function() {
        var fileSize = getFileSize(fileName);
        console.log('done writing default audio file size is ' + fileSize);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('OK! file size is ' + fileSize + ', name is ' + fileName);
    }));
});


app.get('/article', function(req, res){

    var url = req.query.path;
    var fileName = (new Buffer(url).toString('base64')) + '.mp4';
    var filePath = audioDirectory  + path.sep + fileName;

    var fileExists = fs.existsSync(filePath);

    console.log('article: entered. path=' + url + ', filePath=' + filePath + ' file exists? ' + fileExists);

    if(!fileExists){
        //return res.send('audio file ' + filePath + ' does not exist for path ' + url);
        fileName = 'default.mp4';
    }

    request(url, function (err, response, body) {
        if(err){
            console.log('error while trying to get data from ' + url + '. err: ' + err.toString())
            res.send('error while trying to get data from ' + url + '. err: ' + err.toString());
        }

        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        body = body.replace("<div class='articlebottomsharinglinks_right_links  header_sharing'>", "<div class='articlebottomsharinglinks_right_links  header_sharing'>" + contents.replace('audioFile', fileName));
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

function getFileSize(fileName){
    var stats = fs.statSync(fileName);
    var fileSizeInBytes = stats.size;
//Convert the file size to megabytes (optional)
    return fileSizeInBytes / 1000000.0
}