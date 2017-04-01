var http = require('http');
var eventEmitter = require('events').EventEmitter;
var mongoClient = require('mongodb').MongoClient;
var dbstr = 'mongodb://localhost:27017/blog';
http.createServer(function(request, response) {
    if (request.url != "/favicon.ico") {
        response.setHeader("200", { "Content-type": "text/plain" });
        console.log("response")
        response.end("hello nodejs");
    }
}).listen(8020);

eventEmitter.on('readdb', function() {

    mongoClient.connect(dbstr, function(error, db) {
        if (error) { console.log("mongodb open failed ,reason:" + error.message) }
        console.log("mongodb is opend")

    })
});
var DbInsertData = function(db, callback) {
    var tableconnect = db.connect("users");
    if (!tableconnect) {
        console.log("open table")
    }
}
console.log("Node Server nows start at port 8020");