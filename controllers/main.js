const CustomApiError = require('../errors/custom-error')
const jwt =require('jsonwebtoken')
const login = async(req,res) =>{
    // console.log(req.body);
    const {username,password} = req.body
    if(username && password){
        const id = new Date().getDate()
        const token = jwt.sign({id,username},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        })
        res.status(200).json({msg:`Welcome ${username}`,token})
    }else{
        throw new CustomApiError('Please Provide email and password',400) 
    }
}


const dashboard = async(req,res) =>{
    
    console.log(req.user.username)
    const luckyNumber = Math.floor(Math.random()*100)
    
        res.status(200).json({
            msg:`Welcome ${req.user.username}`,
            secret:`Here is you authoriz4d data , ${luckyNumber}`
        }) 

}

module.exports = {
    login,
    dashboard
}