// const mongodb = require('mongodb')
// const Mongoclient =mongodb.MongoClient

// const id=mongodb.ObjectID
const { MongoClient,ObjectID} = require('mongodb')
//const id=new ObjectID()
//console.log(id.getTimestamp())
const connectionURL='mongodb://127.0.0.1:27017'

const databaseName ='task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser: true, useUnifiedTopology: true}, (error,client)=>{
    if(error){
        return console.log("Unable to connect to database!")
    }
    const db= client.db(databaseName)
    // db.collection('tasks').findOne({_id:new ObjectID("5f2e99f73e378732704d64c6")},(error,result)=>{
    //         if(error){
    //             console.log("unable to fetch")
    //         }
    //         console.log(result)
    // })
    
    db.collection('tasks').find({completed:false}).toArray((error,result)=>{
        if(error){
         return  console.log("unable to fetch")
        }
        console.log(result)
})
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:"jatin",
    //     age:25
    // },(error,result)=>{
    //     if(error){
    //         return console.log("unable to insergt user")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("users").insertMany([
    //     {
    //         name:"arun",
    //         age:78
    //     },
    //     {
    //         name:"rohan",
    //         age:34
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("unable to insert documents")
    //     }
    //     console.log(result.ops)
    // })
    // db.collection("tasks").insertMany([
    //     {
    //         description:"clean the house",
    //         completed:true
    //     },
    //     {
    //         description:"Renew inspection",
    //         completed:false
    //     },
    //     {
    //         description:"Pot plants",
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //                  return console.log("unable to insert documents")
    //              }
    //              console.log(result.ops)

    // })
})

