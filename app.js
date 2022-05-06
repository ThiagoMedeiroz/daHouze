const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));



app.listen(3000, () => console.log("Aplicação rodando em http://localhost:3000"))