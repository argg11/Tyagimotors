const mongoose = require('mongoose');
// const mongoUrl ="mongodb://localhost:27017/TyagiMotorReg"
require('dotenv').config();
const mongoUrl = process.env.MONGODB_URL;

mongoose.connect(mongoUrl,{
     //useNewUrlParser: true,
     //useUnifiedTopology: true,
    // useCreateIndex: true
});

const db = mongoose.connection;

db.on('connected',()=>{
    console.log('connection established with db');
});

db.on('error',(err)=>{
    console.error('error',err);
});

db.on('disconnected',()=>{
    console.log('connection terminated with db');
});
module.exports=db;