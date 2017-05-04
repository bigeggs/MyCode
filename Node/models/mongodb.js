var MongoDb = require('mongodb');
var frame = require('../modules/frame');
var Clinet = MongoDb.MongoClient;
var Config = {
    db_user: "root",
    db_pwd: "a6399180a",
    db_host: "localhost",
    db_port: 27017,
    db_name: "snow"
}
var connstr = frame.format(Config.db_host == 'localhost' ? 'mongodb://{2}:{3}/{4}' : 'mongodb://{0}:{1}@{2}:{3}/{4}', Config.db_user, Config.db_pwd, Config.db_host, Config.db_port, Config.db_name);

function DB() {
    this.Insert = function(coltname, data, callback) {
        Clinet.connect(connstr, function(error, mgdb) {
            if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
            var collection = mgdb.collection(coltname);
            collection.insert(data, function(error, result) {
                if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
                callback(result);
            })
        })

    };
    this.Find = function(coltname, query, field, skip, take, callback) {
        Clinet.connect(connstr, function(error, mgdb) {
            if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
            var collection = mgdb.collection(coltname);
            return collection.find(query, field, skip, take).toArray(function(error, result) {
                if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
                callback(result);
            })
        })

    };
    this.Update = function(coltname, filter, update, options, callback) {
        Clinet.connect(connstr, function(error, mgdb) {
            if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
            var collection = mgdb.collection(coltname);
            return collection.update(filter, update, options, function(error, result) {
                if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
                callback(result);
            })
        })

    };
    this.Remove = function(coltname, selector, options, callback) {
        Clinet.connect(connstr, function(error, mgdb) {
            if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
            var collection = mgdb.collection(coltname);
            return collection.remove(selector, options, function(error, result) {
                if (error) { console.log(frame.format('mongodb connect error:', error.message)); return }
                callback(result);
            })
        })

    }
}
module.exports = new DB();