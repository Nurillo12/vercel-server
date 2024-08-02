const { postModel, userModel } = require('../userblogdb/userdb')
const {checkToken} = require('../modules/jwt')

async function deletePostMethod(req, res) {
  const {id} = req.params
 const token = req.cookies.token
 const check_token = checkToken(token)
 const findUser = await userModel.findOne({user_id: check_token})
 const posts = findUser.user_posts.filter(posts_id => posts_id!=id)

await userModel.findOneAndUpdate({user_id: findUser.user_id}, {user_posts: posts})

//  console.log(posts);
//  console.log(findUser);
//  console.log(check_token);


  await postModel.findByIdAndDelete(id)
  res.redirect('/profile')
}

module.exports = {
  deletePostMethod
}