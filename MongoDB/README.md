# Learning Node.js: Using MongoDB with Node

## What is MongoDB?

MongoDB is an open source non-relational database, also called NoSQL database. Traditional SQL uses tables and rows and relationships between tables in the database. NoSQL concenpt introduces the document object model where documents have key-value pairs and sets of these documents act as the database tables. Also unlike traditional SQL, NoSQL databases such as MongoDB support 'dynamic schema design' which allows the documents in a collection to have different fields and structures.

## Working with MongoDB

### Installing MongoDB

- First, make sure you have MongoDB downloaded. You can find the download link [here](https://www.mongodb.com/download-center#community).
- Once you have this downloaded, install MongoDB by clicking on the .msi you just downloaded.
- Find the location of your MongoDB, usually in 'C:/Program Files/MongoDB/Server/3.4/bin' and copy this path
- Open your systems path variables, and add this path to your systems path variables
- Now you should have MongoDB installed on your machine

Now you need to install node.js' driver for MongoDB which lets you manipulate the data from a MongoDB server.

To download and install the official MongoDB driver, use a command line interface and execute the following code:

```
npm install mongodb
```
Once we have this installed, we can now use mongodb as a module with the `require()` statement

Example:

```
var mongodb = require('mongodb');
```

### Creating a Database

Once we have mongo installed, we are able to use it as a module.

To create a database in MongoDB:
- Start by creating a MongoClient Object
- Specify a connection URL with the correct ip address and the name of the database we wish to create
- If everything is correct, then MongoDB will create the database if it doesn't exist, or it will make a connection to it

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});
```

### Creating a Collection

A **collection** in MongoDB is the same a **table** in MySQL

We can use the `createCollection()` method to create a collection.

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.createCollection("customers", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
```

### Creating a document

A **document** in MongoDB is the same as a **record (row)** in MySQL.

To insert a record, or document, into a collection, we can use the `insertOne()` method. The first parameter of this method is an object containing the name(s) and value(s) of each field in the document we want to insert. It also takes a callback function where we can work with any errors, or the result of the insertion.

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = { name: "Company Inc", address: "Highway 37" };
    db.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});
```

##### Inserting Multiple Documents

To insert multiple documents into MongoDB, we use the `insertMany()` method. The first parameter of the `insertMany()` method is an array of objects, containing the data we  want to insert. It also takes a callback function where we can work with any errors, or the result of the insertion.

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'}
    ];
    db.collection("customers").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
    });
});
```


### Result Object

When we insert into a database we get a result object back. The result object contains information about how our recent insertion affected our database.

Example of a result object is

```
{
  result: { ok: 1, n: 14 },
  ops: [
    { name: 'John', address: 'Highway 71', _id: 58fdbf5c0ef8a50b4cdd9a84 },
    { name: 'Peter', address: 'Lowstreet 4', _id: 58fdbf5c0ef8a50b4cdd9a85 },
    { name: 'Amy', address: 'Apple st 652', _id: 58fdbf5c0ef8a50b4cdd9a86 },
    { name: 'Hannah', address: 'Mountain 21', _id: 58fdbf5c0ef8a50b4cdd9a87 },
    { name: 'Michael', address: 'Valley 345', _id: 58fdbf5c0ef8a50b4cdd9a88 },
    { name: 'Sandy', address: 'Ocean blvd 2', _id: 58fdbf5c0ef8a50b4cdd9a89 },
    { name: 'Betty', address: 'Green Grass 1', _id: 58fdbf5c0ef8a50b4cdd9a8a },
    { name: 'Richard', address: 'Sky st 331', _id: 58fdbf5c0ef8a50b4cdd9a8b },
    { name: 'Susan', address: 'One way 98', _id: 58fdbf5c0ef8a50b4cdd9a8c },
    { name: 'Vicky', address: 'Yellow Garden 2', _id: 58fdbf5c0ef8a50b4cdd9a8d },
    { name: 'Ben', address: 'Park Lane 38', _id: 58fdbf5c0ef8a50b4cdd9a8e },
    { name: 'William', address: 'Central st 954', _id: 58fdbf5c0ef8a50b4cdd9a8f },
    { name: 'Chuck', address: 'Main Road 989', _id: 58fdbf5c0ef8a50b4cdd9a90 },
    { name: 'Viola', address: 'Sideway 1633', _id: 58fdbf5c0ef8a50b4cdd9a91 } ],
  insertedCount: 14,
  insertedIds: [
    58fdbf5c0ef8a50b4cdd9a84,
    58fdbf5c0ef8a50b4cdd9a85,
    58fdbf5c0ef8a50b4cdd9a86,
    58fdbf5c0ef8a50b4cdd9a87,
    58fdbf5c0ef8a50b4cdd9a88,
    58fdbf5c0ef8a50b4cdd9a89,
    58fdbf5c0ef8a50b4cdd9a8a,
    58fdbf5c0ef8a50b4cdd9a8b,
    58fdbf5c0ef8a50b4cdd9a8c,
    58fdbf5c0ef8a50b4cdd9a8d,
    58fdbf5c0ef8a50b4cdd9a8e,
    58fdbf5c0ef8a50b4cdd9a8f
    58fdbf5c0ef8a50b4cdd9a90,
    58fdbf5c0ef8a50b4cdd9a91 ]
}
```

One of the ways we can view the values of a result object are:

```
console.log(res.insertedCount)
```

### the id field

If we do not specify an `_id` field, then mondoDB will automatically add one for us and assign a unique id for each document.

In the previous example we did not specify an `_id` field, but looking at our result object we can see that an `_id` was assigned.

MongoDB assigns a unique `_id` for each document. Even if we do specify an `_id` field, it must be unique for each document.

### Find Methods

#### findOne()

If we want to find data within a collection, we can use the `find` methods. This is similar to a `select` in SQL.

`findOne()` method returns the first occurrence in the selection.

The first parameter of `findOne` is a query object

Example of `findOne()` method:

```javascript
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("INSERT_NAME_OF_COLLECTION").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});
```

#### find()

While the `findOne()` returns only the first occurrence in the selection, the `find()` method returns all occurrences in the selection.

The first parameter of the `find()` method is a query object. If we use an empty query object, it will select all documents in the collection.

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```

### Query Methods

When we find documents within a collection using the `find()` methods, we can filter the results using a query object.

Remeber that the first argument of the `find()` methods is a query object, and we can use this to limit the search.

Example:

```javascript
var http = require('http');
var MongoClient =- require('mongodb').MongoClient;
var url = "mongod://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: "Park Lane 38" };
    db.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```

#### Filtering with Regular Expressions (REGEX)

We can create regular expressions to find exactly what we are searching for.

`IMPORTANT: Regular Expressions can only be used to query strings`

Example: Finding only documents where address starts with the letter "S"

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: /^S/ };
    db.collection("customers").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```

### Sorting the Results

We can use `sort()` to sort the results of a query in ascending or descending order.

`sort()` takes one parameter, which is an object defining the sorting order.

Example:

```javascript
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var mysort = { name: 1};
    db.collection("customers").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```

If we wanted the order to be descending use `-1` instead of `1` in the sort variable. Example `var mysort = { name: -1 };`

### Deleting Documents

To delete rows, or documents, of data in MongoDB we use the `delete` methods.

To delete a single document, we can use the `deleteOne()` method.

```javascript
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: "Highway 37"};
    db.collection("customers").deleteOne(myquery, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});
```

To delete multiple documents (rows of data) we can use the `deleteMany()` method

```javascript
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var query = { address: /^O/ };
    db.collection("customers").deleteMany(query, function(err, obj) {
        if (err) throw err;
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});
```

#### Result Object for deleteMany() method

The resulting object when we use the deleteMany() method looks like so:

```
{ n: 1, ok: 1};
```

where n is the number of objects deleted.


### Drop Collection

When we want to delete a collection (table) in Mongo, we can use the `drop()` method.

The drop() method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully.

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("customers").drop(function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
```

Another way to drop a collection is by using the `db.dropCollection()` method

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.dropCollection("customers", function(err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
```

### Update Document

We can update previously created records by using the `update` methods

To update a single record, we can use the `updateOne()` method. The first parameter of the updateOne() method is a query object that contains information about which document to update. `Not: if the query finds more than one record, then it will update the first occurrence`

The second parameter is an object defining the new values of the document. By default, all the fields in the document get updated except the `_id` field so we need to properly set the value of every field otherwise it will update to be a blank.

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: "Valley 345" };
    var newvalues = { name: "Mickey", address: "Canyon 123" };
    db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});
```

To update only specific fields, we can use the `$set` operator, which prevents other fields from being left empty when we update

```javascript
var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { address: "Canyon 123" } };
    db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});
```

so far we have only been updating one document at a time, in order to update many documents we need to use the `updateMany()` method

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " documents(s) updated");
        db.close();
    });
});
```

#### The Result Object

The resulting objects when we run a update method look like this:

```
{ n: 1, nModified: 2, ok: 1}
```

### Limit

When we query the database, we can limit how many results we would like to see using the `limit()` method.

The `limit()` method takes one parameter, which is a number defining how many documents (rows of data) to return

Example:

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("customers").find().limit(10).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
```

### Join Collections

Similar to how we can join tables in a relational database, we can do an outer join using `$lookup`

`$lookup` allows us to specify which collections to join and which fields should match.

```javascript
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection('orders').aggregate([
        {
            $lookup:
            {
                from: 'products';
                localField: 'product_id',
                foreignField: 'id',
                as: 'orderdetails'
            }
        }
    ], function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});
```

In the above example, we are using the collections `orders` and `products` and joining them based on the id's of each collection.
