const CustomApiError = require('../errors/custom-error')
const login = async(req,res) =>{
    const {username,password} = req.body
    if(username && password){
        res.status(200).json({msg:`Welcome ${username}`})
    }else{
        throw new CustomApiError('Please Provide email and password',400) 
    }
}

const dashboard = async(req,res) =>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello `,secret:`Here is your licky number ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}