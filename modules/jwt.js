const JWT = require('jsonwebtoken')

function generateToken(data) {
  let token = JWT.sign(data, 'shaftoli')
  return token
}

// console.log(generateToken({name: "Steven"}));

function checkToken(token) {
  let data = JWT.verify(token, 'shaftoli')
  return data
}

let token = generateToken({ name: 'Steven'})
// console.log(token);

let check_token = checkToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3RldmVuIiwiaWF0IjoxNzIxMTIxMTM1fQ.bPtBYVxVb_QPH2I7uyh6Yqm-Z_BkITNZiAsYmbrkBiw')

// console.log(check_token);

module.exports = {
  generateToken,
  checkToken
}
