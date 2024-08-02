const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const {connectDB, userModel} = require('./userblogdb/userdb')
const homeRoute = require('./routes/homeRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactRoute')
const signInRoute = require('./routes/signInRoute')
const signUpRoute = require('./routes/signUpRoute')
const profileRoute = require('./routes/profileRoute')
const logOutRoute = require('./routes/logOutRoute')
const addPostRoute = require('./routes/addPostRoute')
const deletePostRoute = require('./routes/deletePostRoute')
const editRoute = require('./routes/editRoute')
const allPostsRoute = require('./routes/allPostsRoute')
const cookieParser = require('cookie-parser')
const {notFound} = require('./controllers/notFoundController')
const {checkAuth} = require('./modules/auth')
// const notFoundRoute = require('./routes/notFoundRoute')
require('dotenv').config()

// connection database
connectDB()

app.use(cookieParser())
app.use(checkAuth)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 3000
// console.log(PORT);

// ejs Set
app.set('view engine', 'ejs')

app.use(homeRoute.path, homeRoute.router)
app.use(aboutRoute.path, aboutRoute.router)
app.use(contactRoute.path, contactRoute.router)
app.use(signInRoute.path, signInRoute.router)
app.use(signUpRoute.path, signUpRoute.router)
app.use(profileRoute.path, profileRoute.router)
app.use(logOutRoute.path, logOutRoute.router)
app.use(addPostRoute.path, addPostRoute.router)
app.use(deletePostRoute.path, deletePostRoute.router)
app.use(editRoute.path, editRoute.router)
app.use(allPostsRoute.path, allPostsRoute.router)

// 404 Not Found Page
app.use(notFound)

app.listen(PORT, () => {
  console.log(`Server is running at {PORT}`);
})