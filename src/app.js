const path = require('path');
const express = require("express");
const app = express();
const db = require("./db/conn");
const hbs = require('hbs');
require('dotenv').config();

const Register = require("./models/cust");
const { error } = require('console');

// console.log(__dirname);
const port= process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public");
const viewpath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set('view engine', "hbs");
app.set('views',viewpath);
hbs.registerPartials(partialpath);
const bodyParser = require('body-parser');

app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{

    res.render("home")
});

app.get('/index',(req,res)=>{

    res.render("index")
});

app.post('/index',async(req,res)=>{
    res.render("home")
try {
         
        const custregister = new Register({
        firstName: req.body.firstName,
        lastName:req.body.lastName
        ,vehicleNo:req.body.vehicleNo
        ,vehicleName:req.body.vehicleName
        ,phoneNo:req.body.phoneNo
    })

        const detailsave = await custregister.save();
        console.log("data saved");
       
        res.redirect('/home');
        
        
} catch (err) {
    console.log(err);
    
}


})


app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
})

