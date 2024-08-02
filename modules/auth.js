const {userModel} = require('../userblogdb/userdb')
const {checkToken} = require('./jwt')

async function checkAuth(req, res, next) {
try {
  const token = req.cookies?.token
  // console.log(token);
  if(token) {
    let user_id = checkToken(token)
    let findUser = await userModel.findOne({user_id: user_id})
    // console.log(findUser);
    req.user = {
      username:findUser.username,
      email: findUser.email
    }
  }
  next()
} catch (error) {
  console.log(error + "");
}
}

module.exports = {
  checkAuth
}
