const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Mydetails = new Schema({
    name:{
        type:String,
        require:true,
    },
    number:{
        type:Number,
        require:true,
    },
     email: {
     type:String,
     trim:true,
     unique: true,
     require: true,
     },
    date:{
       type:String,
       require:true,
    },
    address:{
        type:String,
        require:true,
    },
},

  {timestamps:true}
  )

module.exports= mongoose.model('task',Mydetails)