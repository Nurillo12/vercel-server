function protectRoute(req, res, next) {
  if(!req?.cookies?.token) {
    res.redirect('/')
  }
  next()
}

module.exports = {
  protectRoute
}