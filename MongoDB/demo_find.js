var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

// Don't forget to setup a mongodb connection using 'mongod' in a separate terminal
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("customers").findOne({}, function(err, results) {
        if (err) throw err;
        console.log(results.name);
        db.close();
    });
});
