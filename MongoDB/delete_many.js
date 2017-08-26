var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: /^O/ }
    db.collection("customers").deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " documents(s) deleted");
        db.close();
    });
});
