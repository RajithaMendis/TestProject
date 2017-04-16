/**
 * Created by User on 4/16/2017.
 */
var express =require('express');
var http = require('http');
var path= require('path');
var mongoose= require('mongoose');
var bodyParser = require('body-parser');


var app= express();

app.set('port',process.env.PORT||3000);

//View Engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Set Static Folder
app.use(express.static(path.join(__dirname,'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',function(req,res,next){
    //res.send('INDEX PAGE');
    res.render('index.html');
});

mongoose.connect('mongodb://localhost/test');

var Schema = new mongoose.Schema({
    _id : String,
    drugname :String,
    quantity :Number,
   // mdate :Date,
   // edate :Date,
});

var user = mongoose.model('pharmacy',Schema);

app.get('/view',function (req,res) {
    user.find({},function (err,docs) {
        if(err) {res.json(err);}
        //else res.render('index',{users:docs});
        else{
            //  res.json(docs);
            res.render('view',{users:docs});
        }
    });
});
app.post('/kk',function (req,res,next) {
    user.find({},function (err,docs) {
        if(err) {res.json(err);}
        //else res.render('index',{users:docs});
        else{
            //  res.json(docs);
            res.render('view',{users:docs});
        }
    });
    var id= req.body.id;
    user.deleteOne({"_id":id},function (err,result) {
        if(err){res.json(err);}
        else{
            res.send("Successfully Deleted");
        }

    });
});
app.post('/new',function (req,res) {
    new user({
        _id :req.body.drugID,
        drugname :req.body.drugname,
        quantity:req.body.quantity,
       // mdate:req.body.mdate,
       // edate:req.body.edate
    }).save(function(err,doc){
        if(err)res.json(err);
        else res.send("Successfully Inserted");
       // else res.redirect('/view');
    });

});



var server = http.createServer(app).listen(app.get('port'),function () {
    console.log('Express server listening on port'+app.get('port'));

});