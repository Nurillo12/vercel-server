const getContactPage = async(req, res) => {
  if(req?.cookies.token) {
    res.render('contact', {
      title: 'About Page',
      sarlavha: 'About Page',
      username: req?.user?.username,
      path: '/contact',
      error: ""
    })
  }
}

module.exports = {
  getContactPage
}