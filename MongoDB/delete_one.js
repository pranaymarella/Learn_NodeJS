var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: "Highway 37"};
    db.collection("customers").deleteOne(query, function(err, obj) {
        if (err) throw err;
        console.log("1 object deleted");
        db.close();
    });
});
