const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

 const CommetSchema = new Schema({

  body:{
      type:String,
      require:true
  },
  user:{
      type:Schema.Types.ObjectId,
      ref:'user'
  },
  date:{
      type:Date,
      default:Date.now()
  },
  commetisApproved:{
      type:Boolean,
      default:false
  }
 


 })

module.exports = {Commet:mongoose.model('commet',CommetSchema)};