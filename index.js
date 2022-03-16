var express = require('express');
var path = require('path');
var { MongoClient } = require('mongodb');
var bodyParser = require('body-parser');
//var crypto = require('crypto');

var app = express();
//enter the name of the database in the end 
var url = "mongodb://localhost:27017";

// Database Name
const dbName = 'myProject';



app.get('/', function (req, res) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('/public/index.html');
}).listen(3000);

console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// Sign-up function starts here. . .
app.post('/sign_up', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;


    var data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    }

    const client = new MongoClient(url);

    
    async function main() {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        //CREATING A COLLECTION IN MONGODB USING NODE.JS
        db.collection("details").insertOne(data, (err, collection) => {
            if (err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
        });
        return 'done.';
    }
    main()
  .then(console.log)
  .catch(console.error)

console.log("DATA is " + JSON.stringify(data));
res.set({
    'Access-Control-Allow-Origin': '*'
});
 res.send(data);  

});
