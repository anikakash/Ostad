import axios from "axios";

const URL = "http://localhost:8000";
export const addUser = async (data) =>{
    try{
       return await axios.post(`${URL}/add`, data)
    }catch (e){
        console.log("erro while call add use api ", e);
    }
}

export const getUsers = async () =>{
    try{
        return await axios.get(`${URL}/all`)
    } catch (e){
        console.log("Error while getting user api ", e);
    }
}