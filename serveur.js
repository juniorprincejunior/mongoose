

const express = require('express')
const app = express()

const UserModel = require('./models/user.model')

require('dotenv').config()
require('./config/db')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
// parse application/json

// add a document to the database
app.get('/yo', (req, res) => {
  const User = new UserModel({
    nom: "Junior",
    age: 20,
    favoriteFoods: ['Banana']
  });
  User.save()
    .then((result)=> {
      res.send(result)
    })
    .catch((err)=> {
    console.log(err)
  })
})

app.get('/yo/find', (req, res) => {
  UserModel.find((err, user) => {
    if(err) {
      console.log(err);
    }
    else{
      res.send(user)
    }
  })
   // .then(doc => res.send(res))
    //.catch(err =>{ console.log(err)})
})

app.get('/yo/update', (req, res) => {
  UserModel.findOneAndUpdate({ _id: "616729362d98657de7f47181" }, { nom: "Beito" })
    .then(doc => res.send('updated'))
  .catch(err => console.log(err))
})


// remove the document to the database

app.get('/yo/remove', (req, res) => {

  UserModel.findOneAndRemove({_id:"6166330d33c6a4282c5b27ab"})
    .then( doc => res.send("removed") )
    .catch((err) => {
      console.log(err);
    })
})

//routes

//app.use('/api/user', userRoute)
//serveur
app.listen(process.env.PORT, ()=>{
    console.log(`le server a demarer sur le port ${process.env.PORT}`);
})  