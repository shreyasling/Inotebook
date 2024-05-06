const mongoose = require('mongoose');   
const { Schema } = mongoose;

const NotesSchema = new Schema({
    title:{
        type: String,
        required :true

    },
    description:{
        type: String,
        required:true,
        
    },
    tag:{
        type: String,
        default:"general"
    },
    date:{
        type:Date,
        default:Date.now
    }
    
  });
  const User=mongoose.model('notes',NotesSchema);
  User.createIndexes();
  module.exports=User