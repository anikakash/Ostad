import axios from "axios";

export async function ProductRequest(){
    let response = await axios.get("https://dummyjson.com/products");
    return response.data['products']
}