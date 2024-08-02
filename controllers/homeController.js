const getHomePage = async(req, res) => {
  res.render('index', {
    title: 'Home Page',
    sarlavha: 'Main Page',
    path: '/',
    username: req?.user?.username,
    error: ""
  })
}

module.exports = {
  getHomePage
}