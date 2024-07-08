const mongoose = require('mongoose');
const { type } = require('os');
const custschema = new mongoose.Schema({

    firstName:{

        type:String,
        //  required:true
    },
    firstName:{

        type:String,
        //  required:true
    },
    lastName:{

        type:String,
        // required:true

    },

    vehicleNo:{

        type:String,
        // required:true

    },

    vehicleName:{

        type:String,
        // required:true

    },

    phoneNo:{

        type:Number,
        // required:true

    }   

})
const cust = new mongoose.model("Custdetail",custschema);
module.exports=cust;