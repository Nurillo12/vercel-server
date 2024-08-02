const {postModel, userModel} = require('../userblogdb/userdb')
const {checkToken} = require('../modules/jwt')

const getProfilePage = async(req, res) => {
  if(req?.cookies.token) {
    let posts = await postModel.find({})
    const token = req.cookies.token
    const user_id = checkToken(token)
    const getUser = await userModel.findOne({user_id: user_id})
    // console.log(getUser);
    // console.log(posts.length);

    let userPosts = []
    for(let element of posts) {
      if(getUser.user_posts.includes(element._id)) {
        userPosts.push(element)
      }
    }

    // console.log(getUser);

    // console.log(posts);
    res.render('profile', {
      title: 'About Page',
      sarlavha: 'About Page',
      username: req?.user?.username,
      path: '/profile',
      posts: userPosts,
      error: ""
    })
  }
}

module.exports = {
  getProfilePage
}