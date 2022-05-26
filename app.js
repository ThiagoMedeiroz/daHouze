const express = require('express')
const path = require('path')
const app = express()
const loginRouter = require('./routers/Login')
const homeRouter = require('./routers/Home')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(loginRouter)
app.use(homeRouter)
// app.get('/', (req, res) => {
//     res.render('home')
//   })

//   app.post('/', (req, res) => {
//     // const users = getInfoDatabase('users') CRIAR DATABASE
//     const { email, password } = req.body

//     const userExists = users.find(user => {
//       return user.email === email && user.password === password
//     })
// })

app.listen(3000, () =>
  console.log('Aplicação rodando em http://localhost:3000')
)
