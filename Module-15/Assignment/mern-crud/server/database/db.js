import mongoose from "mongoose";

const connection = async (username, password)=>{
    const URL = `mongodb+srv://${username}:${password}@student-mern-crud.mt28lbi.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database Connected Successfully");
    }catch (error){
        console.log("Error while connection with the db ", error);
    }
}

export default connection;