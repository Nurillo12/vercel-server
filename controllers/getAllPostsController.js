const {postModel} = require('../userblogdb/userdb')

const getAllPosts = async(req, res) => {
  const posts = await postModel.find({})
  if(req?.cookies.token) {
    res.render('allposts', {
      title: 'Allposts Page',
      sarlavha: 'Barcha mahsulotlar',
      username: req?.user?.username,
      path: '/allposts',
      posts: posts,
      error: ""
    })
  }
  

}

module.exports = {
  getAllPosts
}