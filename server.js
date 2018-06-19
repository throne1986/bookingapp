const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const http = require('http');
const db = require('./config/db');
const app = express();
var cors = require('cors')
var port = process.env.PORT || 8000;  
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Movies Database application"});
});
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log("We are live on " + port);
    })
})