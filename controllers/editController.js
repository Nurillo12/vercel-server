const {postModel} = require('../userblogdb/userdb')

const getEditPage = async(req, res) => {
try {
  // console.log(req.params.id);
  const {id} = req.params
  const findUser = await postModel.findById(id)
  console.log(findUser);
  
  res.render('edit', {
    title: 'Tahrirlash Sahifasi',
    sarlavha: 'Tahrirlash',
    path: '/edit',
    username: req?.user?.username,
    error: "",
    user_post: findUser
  })

} catch (error) {
  
  res.render('edit', {
    title: 'Tahrirlash Sahifasi',
    sarlavha: 'Tahrirlash',
    path: '/edit',
    username: req?.user?.username,
    error: error+""
  })

}
}


async function postEditPage(req, res) {

try {
  const {id} = req.params
  // console.log(req.params.id);
  const {mahsulot, tavsif, rasm, narx,} = req.body

if(!id) {
  throw new Error('Id topilmadi!')
}

if(!(mahsulot, tavsif, rasm, narx)) {
  throw new Error("Ma'lumot to'liq to'ldirilmadi!")
}

  await postModel.findByIdAndUpdate(id, {mahsulot: mahsulot, tavsif: tavsif, rasm: rasm, narx: narx})
  res.redirect('/profile')
} catch (error) {
  res.render('edit', {
    title: 'Tahrirlash Sahifasi',
    sarlavha: 'Tahrirlash',
    path: '/edit',
    username: req?.user?.username,
    error: error + ""
    
  })
}

}

// function postEdit(req, res) {
  // 

  // console.log(req.params.id);
  // console.log(req.body);

  // const {id} = req.params
  // res.redirect('/profile')
  // const findUser = await postModel.findById(id)
  // console.log(findUser);

// } 



module.exports = {
  getEditPage,
  postEditPage
}