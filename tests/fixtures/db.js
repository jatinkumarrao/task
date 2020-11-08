const mongoose=require('mongoose')
const jwt=require("jsonwebtoken")
const User=require('../../src/models/user')
const Task=require('../../src/models/task')
const userOneid=  new mongoose.Types.ObjectId()
const userOne ={
        _id: userOneid,
        name:"Mike kumar",
        email:"mike@gmail.com",
        passwordone:"1234567",
        passwordtwo:"1234567",
        tokens:[{
            token: jwt.sign({_id: userOneid},process.env.JWT_SECRET)
        }]
}
const userTwoid=  new mongoose.Types.ObjectId()
const userTwo ={
        _id: userTwoid,
        name:"Andrew Scotch",
        email:"andrew@example.com",
        passwordone:"1234567",
        passwordtwo:"1234567",
        tokens:[{
            token: jwt.sign({_id: userTwoid},process.env.JWT_SECRET)
        }]
}


const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'First task',
    completed: false,
    owner: userOne._id
}

const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Second task',
    completed: true,
    owner: userOne._id
}

const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'Third task',
    completed: true,
    owner: userTwo._id
}


const setupDatabase = async()=>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()
}
module.exports={
    userOneid,
    userOne,
    userTwoid,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
}