const express = require('express')
const path = require('path')
const app = express()
const loginRouter = require('./routers/Login')
const homeRouter = require('./routers/Home')
const categoriesRouter = require('./routers/Categories')
const finalizacaoRouter = require('./routers/Finalizacao')
<<<<<<< HEAD
const senhaRouter = require ('./routers/EsqueciSenha')
=======
const productRouter = require('./routers/Product')
const cartRouter = require('./routers/Cart')
const userRouter = require('./routers/User')
>>>>>>> 883b970b6f7d7035b089ec7f9ed67a2be5e1550a

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(loginRouter)
app.use(homeRouter)
app.use(categoriesRouter)
app.use(finalizacaoRouter)
<<<<<<< HEAD
app.use(senhaRouter)
=======
app.use(productRouter)
app.use(cartRouter)
app.use(userRouter)

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
>>>>>>> 883b970b6f7d7035b089ec7f9ed67a2be5e1550a

app.listen(3000, () =>
  console.log('Aplicação rodando em http://localhost:3000')
)
