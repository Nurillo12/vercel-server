const {postModel, userModel} = require('../userblogdb/userdb')
const {checkToken} = require('../modules/jwt')

const getAddPost = async(req, res) => {
 
  if(req?.cookies.token) {
    res.render('addpost', {
      title: 'Add Page',
      sarlavha: 'Add Page',
      path: '/addpost',
      username: req?.user?.username,
      error: ""
    })
  }
 
}

const postAddMethod = async(req, res) => {
  // console.log(req.body);
  try {
    const {mahsulot, tavsif, rasm, narx} = req.body
    if(!(mahsulot && tavsif && rasm && narx)) {
      throw new Error("Ma'lumot to'ldirilmadi!")
    }

    const createPost = {
      mahsulot: mahsulot,
      tavsif: tavsif,
      rasm: rasm,
      narx: narx
    }

    const newPost = new postModel(createPost)

const token = req.cookies.token
let user_id = checkToken(token)
const findUser = await userModel.findOne({user_id: user_id})

await userModel.findByIdAndUpdate(findUser._id, {$push: {user_posts: newPost._id}}, {new: true, upsert: true})
// console.log(findUser);
// console.log(user_id);

await newPost.save()


res.redirect('/profile')
  } catch (error) {
    res.render('addpost', {
      title: 'Add Page',
      sarlavha: 'Add Page',
      path: '/addpost',
      username: req?.user?.username,
      error: error
    })
  }
}

module.exports = {
  getAddPost,
  postAddMethod
}