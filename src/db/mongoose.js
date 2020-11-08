const mongoose= require("mongoose")

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
     useUnifiedTopology: true,
     useFindAndModify: false 
})



// const me = new User({
//     name:"Jatin Kumar",
//     email:"abc@gmail.com", 
//     password:"ironmans",   
// })
// me.save().then(()=>{
// return console.log(me)
// }).catch((error)=>{
// console.log(error)
// })

// const Task= mongoose.model('Task',{
//     description:{
//         type:String,
//         trim: true,
//         index: true,
//         unique: true,
//         lowercase:true,
//         minlength:6
        
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
//         validate(value){
//             if(!validator.isEmail(value)){
//              throw new Error("Email is invalid")
//             }

//         }
//     },
//     password:{
//             type:String,
//             required:true,
//             minlength:7,
//             trim:true,
//             validate(value){
//                 if(value.toLowerCase().includes('password')){
//                     throw new Error("Password not contain password")
//                 }
//             }
//     },
//     age:{
//        type:Number,
//        validate(value){
//             if(value<0){
//                 throw new Error("Age must be a positive number")
//             }
//        }
//     }
// })

// const task=new Task({
//     description:' Learn the mongoose',
//     age:1,
//     password:"qwqwwqwwqw",
//     email:"abc@gmail.com"
// })
// task.save().then(()=>{
//     return console.log(task)
// }).catch((error)=>{
// console.log(error)
// })