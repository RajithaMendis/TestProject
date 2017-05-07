const bodyParser=require('body-parser');
const express=require('express');
const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
require('./models/sampleCenterType.model.js');
require('./models/fieldmodel.js');
require('./models/labTest.model.js');
const SampleCenterTypeRouter=require('./routes/sampleCenterType.route.js');
const FieldRouter=require('./routes/field.route.js');
const LabTestRouter=require('./routes/labTest.route.js');
const app=express();

app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/AssignmentTest2',err =>{
    if(err){
        console.log(err);
        process.exit(1);
    }
});
app.use('/app',express.static(__dirname+'/public'));
app.get('/',(req,res,next)=>{
    res.sendFile(__dirname+'/public/index.html');
});
app.use('/sampleCenterTypes',SampleCenterTypeRouter);
app.use('/fields',FieldRouter);
app.use('/labTests',LabTestRouter);
app.get('/app/*',(req,res,next)=>{
   res.sendFile(__dirname+'/public/index.html');
});
app.listen(3000,err =>{
   if(err){
       console.error(err);
       return;
   }
   console.log('server is listening on port 3000');
});
