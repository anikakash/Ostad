const jwt=require('jsonwebtoken')


exports.authVerify = (req, res, next) => {

    let Token = req.headers.token

    try {

        const decoded = jwt.verify(Token, 'secretkey')

        let email = decoded.data.Email

        req.headers.email = email

        next()


        
    } catch (error) {
        
        res.json({status: 'fail', data: error})

    }

}