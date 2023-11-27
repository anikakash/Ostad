import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = mongoose.Schema({
    //fName: "Anik", lName:"Akash", gender:"Male", dOB:"1 Jan", nationality: "bd", address:"dhaka", email:"anik@gmail.com",phone:"12345"
    id: Number,
    fName: String,
    lName : String,
    gender: String,
    dOB: String,
    nationality : String,
    address : String,
    email : String,
    phone : String
})



const user = mongoose.model('user', userSchema);

export default user;