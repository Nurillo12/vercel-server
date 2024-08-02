const {userModel} = require('../userblogdb/userdb')
const path = require('path')
const fs = require('fs').promises
const {confirmHash} = require('../crypt')
const {generateToken} = require('../modules/jwt')
const getSignInPage = async(req, res) => {
  res.render('signin', {
    title: 'Sign In Page',
    sarlavha: 'Login',
    path: '/signin',
    username: req?.user?.username,
    error: ""
  })
 
}

const postSignInPage = async(req, res) => {
  console.log(req.body);
try {

  const {email, password} = req.body
  if(!(email && password)) {
    throw new Error("Ma'lumot to'ldirilmadi!")
  }
  let findByEmail = await userModel.findOne({email: email})
    if(!findByEmail) {
      throw new Error("Bunday email topilmadi!")
    }

    const confirmHashPassword = await confirmHash(password, findByEmail.password)
    console.log(confirmHashPassword);
    if(confirmHashPassword == false) {
      throw new Error("Parol xato kiritildi! ")
    }
   const token = generateToken(findByEmail.user_id)
  //  console.log(token);
    // res.cookie('name', 'Steven').redirect('/')
    // res.redirect('/')
    res.cookie('token', token).redirect('/profile')
    
} catch (error) {
  res.render('signin', {
    title: 'Sign In Page',
    sarlavha: 'Login',
    path: '/signin',
    username: req?.user?.username,
    error: error+""
  })
}



}

module.exports = {
  getSignInPage,
  postSignInPage
}