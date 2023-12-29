const jwt = require("jsonwebtoken");

exports.EncodeToken = async(email, user_id)=>{
    let KEY = "EMON-466"
    let EXPIRE = {expiresIn: "24h"}
    let PAYLOAD = {email:email, user_id:user_id}
    return jwt.sign(PAYLOAD, KEY, EXPIRE)
}

exports.DecodeToken = async(token)=>{
    try {
        let KEY = "EMON-466"
        return jwt.verify(token, KEY)
    } catch (error) {
        return null
    }
}