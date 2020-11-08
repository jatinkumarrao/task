const mongoose= require("mongoose")
//const validator= require("validator")
const bcrypt=require("bcryptjs");
const validator = require("validator");
//const { required } = require("yargs");
const jwt =require("jsonwebtoken");
const Task = require("./task");
const { Timestamp } = require("mongodb");

const userSchema =new mongoose.Schema({

    name:{
        type: String,
        required: true,
        minlength: 6,
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
            throw new Error("Email is invalid")
            }
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("password not equal to password")
            }
        }
    },
    age:{
        type: Number,
        default:1,
        validate(value){
            if(value.length<0){s
                throw new Error("age must be positive")
            }
        }
    },
    avatar:{
        type:Buffer
    },
    tokens:[{
    token:{
        type:String,
        required:true
    }
}]
},{
    timestamps:true
})

userSchema.virtual('tasks',{
        ref:"Task",
        localField:"_id",
        foreignField:"owner"
})
userSchema.methods.toJSON = function(){
    const user = this
    const userObject =user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}
userSchema.methods.generateAuthToken = async function(){
    const user=this
    const token= jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.virtual('passwordone')
    .get(async function() {
      return this._password;
    })
    .set(async function(value) {
        this._passwordone = value;
        var salt = this.salt = bcrypt.genSaltSync(8);
        this.password = bcrypt.hashSync(value, salt);
    });
userSchema.virtual('passwordtwo')
    .get(function() {
      return this._passwordtwo;
    })
    .set(function(value) {
        this._passwordtwo = value;
    });
    userSchema.path('password').validate(function(v) {
        if (this._passwordone || this._passwordtwo) {
            if(this._passwordone.toLowerCase().includes("password")){
                this.invalidate('password', 'password not equal to password');
            }
            if(this._passwordone.length <=6){
                this.invalidate('password', 'length must be 6 chracter ');
            }
            if(validator.isEmpty(this._passwordone)){
                this.invalidate('password', 'password cannot be empty ');
            }
            if (this._passwordone !== this._passwordtwo) {
            this.invalidate('passwordConfirmation', 'must match confirmation.');
          }
        }
        //console.log(this._passwordone)
        if (this.isNew && !this._passwordone) {
          this.invalidate('password', 'required');
        }
      }, null);
      userSchema.statics.findByCredentials=async(email,password)=>{
          const user=await User.findOne({email})
          if(!user){
             throw new Error("Incorrect username")
          //  return callback(false,{message : 'Incorrect username'});
           
          }
          const isMatch= await bcrypt.compare(password, user.password)
          if(!isMatch){
         throw new Error("Incorrect Password")
            //return callback(false,{message : 'Incorrect Password'});
          }
          return(user);
        
      }
//     userSchema.pre('save',async function (next){
//     console.log( this.password)
//     console.log(this._passwordConfirmation)
//    if( this.password !==this._passwordConfirmation){
//         this.invalidate("passwordConfirmation","enter the same password")
//    }
//    else{
//     if(user.isModified('password')){

//         user.password =await bcrypt.hash(user.password,8)
//     }
//     console.log('just before saving')
// }
// next();
// })
userSchema.pre("remove",async function(next){
    const user= this
    await Task.deleteMany({owner:user._id})
    next()
})

const User= mongoose.model('User',userSchema)

module.exports=User