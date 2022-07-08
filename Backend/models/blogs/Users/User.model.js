import Mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
//Defining and structuring user data
const userSchema = new Mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name can not be missing"]
    },
    email:{
        type:String,
        required:[true, "Email can not be missing"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password can not be missing"]
    },
    
}, {collection:"Users_Storage"},{timestamps:true});

userSchema.set('toJSON',{
    transform:(document,returnedObject)=>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})
//Salting and hashing password
userSchema.pre("save",async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});
//Generating jsonwebtoken for created accounts
userSchema.methods.createJWT = function(){
    return jwt.sign(
        {userId:this._id,name:this.name},
        process.env.JWT_SECRET_KEY,
        {expiresIn:"1hr"}
    )
};
//comparing passwords when loging in
userSchema.methods.comparePasswords = async function(userPassword){
    const isMatch = await bcrypt.compare(userPassword,this.password);
    return isMatch;
}
const User = Mongoose.model("User", userSchema);

export default User