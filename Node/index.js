var http = require('http');
var frame = require('./modules/frame');
var eventEmitter = require('events').EventEmitter;
var mongoClient = require('mongodb').MongoClient;
var dbstr = 'mongodb://localhost:27017/snow';
var event = new eventEmitter();
var User = require('./models/user');
http.createServer(function(request, response) {
    if (request.url != "/favicon.ico") {
        response.setHeader("200", { "Content-type": "text/plain" });
        var user = new User();
        user.name = 'zx';
        user.role = '管理员';
        user.age = 20;
        var user1 = new User();
        user1.name = 'ss';
        user1.role = '管理员';
        user1.age = 30;
        response.write(user.logininlog());
        response.end(user1.logininlog());
        //event.emit('readdb');
    }
}).listen(8020);

event.on('readdb', function() {
    mongoClient.connect(dbstr, function(error, db) {
        if (error) {
            frame.format(console.log("mongodb open failed ,reason:{0}", error.message))
        }
        console.log("mongodb is opend")
        DbInsertData(db, function() {
            console.log('data add success')
        });
    });

});
var DbInsertData = function(db, callback) {
    var tableconnect = db.collection("users");
    var data = [{ "name": "菜鸟教程", "url": "www.runoob.com" }, { "name": "菜鸟工具", "url": "c.runoob.com" }];
    if (!tableconnect) {
        console.log("open table failed")
    }
    tableconnect.insert(data, function(error, result) {
        if (error) {
            console.log(frame.format('db insert failed, reason:{0}', error.message));
        }
        callback(result);
    })
}
console.log(frame.format('Node Server nows start at port :{0}', 8020));