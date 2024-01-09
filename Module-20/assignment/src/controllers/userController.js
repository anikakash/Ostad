const { RegisterUserService, LoginUserService, ReadUserService, UpdateUserService } = require("../services/userService")


exports.RegisterUser = async (req, res) => {

    let result = await RegisterUserService(req)

    if(result.status === 'success'){
        return res.status(200).json(result)
    }else{
        return res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}

exports.LoginUser = async (req, res) => {
    let result = await LoginUserService(req);
    if (result.status === 'success') {
        res.json({status: 'success', data: result.data})
    } else if(result.status === 'wrong') {
        res.json({status: 'wrong', data: 'invalid username or password'})
    }
     else {
        res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}

exports.ReadUser = async(req, res) => {
    let result = await ReadUserService(req)
    if(result.status === 'success'){
        return res.status(200).json(result)
    }else{
        return res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}


exports.UpdateUser = async(req, res) => {
    let result = await UpdateUserService(req)
    if(result.status === 'success'){
        return res.status(200).json(result)
    }else if(result.status === 'email') {
        return res.status(404).json({status: 'not allowed', data: 'you can not update the email'})
    }else{
        return res.status(404).json({status: 'fail', data: 'something went wrong'})
    }
}