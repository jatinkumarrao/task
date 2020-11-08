const app=require('./app')

// const User=require('./models/user')
// const Task=require('./models/task')

const port=process.env.PORT

// app.use((req,res,next)=>{
//     console.log(req.method,req.path)
//     if(req.method=="GET"){
//         res.send("Get request disable")
//     }
//     else{
//         next()
//     }
    
// })

// const router=new express.Router()
// router.get('/test',async(req,res)=>{
//     res.send("sending")

// })

// const bycrpt=require("bcryptjs")
// const myfunction=async()=>{
//   const password="password"
//   const hashpassword=await bycrpt.hash(password, 8)
//   console.log(hashpassword)
//   const ismatch=await bycrpt.compare("jatin",hashpassword)
//   console.log(ismatch)
// }
// myfunction()
// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     const task = await Task.findById('5c2e505a3253e18a43e612e6')
//    // await task.populate('owner').execPopulate()
//     console.log(task)

//     // const user = await User.findById('5c2e4dcb5eac678a23725b5b')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()
//const main= async()=>{
//    const task=await Task.findById("5f4b18b14f1abe4d08819023")
//    await task.populate('owner').execPopulate()
//    console.log(task) 
// const user=await User.findById("5f4a6ae2f96ea83fdc86e7d3")
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)
// }
// main()
app.listen(port,()=>{
    console.log("Server is up on port" +port)
})