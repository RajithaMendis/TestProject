/**
 * Created by user on 5/8/2017.
 */

var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();

<!--
var schemaName = new Schema({
    request: String,
    time: Number
}, {
    collection: 'collectionName'
})
var Model = mongoose.model('Model', schemaName);
mongoose.connect('mongodb://localhost:27017/dbName');

mongoose.connect('mongodb://dbuser:dbpassword@ds055555.mlab.com:55555/dbName');

app.get('/save/:query', cors(), function(req, res) {
    var query = req.params.query;

    var savedata = new Model({
        'request': query,
        'time': Math.floor(Date.now() / 1000)
    }).save(function(err, result) {
        if (err) throw err;

        if(result) {
            res.json(result)
        }
    })
})
-->

mongoose.Promise=global.Promise;

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/AssignmentTest2',err=function(){
    if(err){
        console.log(err);
        process.exit(1);
    }
});

app.use('/app',express.static(__dirname+'/public'));
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/public/login.html');
});

