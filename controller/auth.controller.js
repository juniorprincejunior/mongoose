const { application } = require('express');
const UserModel = require('../models/user.model')




module.exports.signUp = async (req, res)=>{
    console.log(req.body);
    //const {nom, age, FavoriteFoods} = req.body

    try {
        const user = await UserModel.Create(req.body);
        res.status(201).send({user : user._id})
    }
    catch(err){
    res.status(200).send({err})
    }

}
 
