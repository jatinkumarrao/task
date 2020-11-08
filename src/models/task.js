const mongoose  = require("mongoose");
const task= new mongoose.Schema({
    description:{
        type:String,
        trim: true,
        index: true,
        unique: true,
        lowercase:true,
        minlength:6,
        required:true
        
    },
    completed:{
        type:Boolean,
        default:false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'User'
    }
},{
    timestamps:true
})
const Task= mongoose.model('Task',task)

    module.exports=Task
    