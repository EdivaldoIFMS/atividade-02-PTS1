
const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('public'));
app.set( 'view engine', 'ejs') ; 
app.engine ( ' html ', require('ejs').renderFile );

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/', (req, res) => {
  res.render('/index.ejs');
});

app.get('/noticias', (req, res) => {
  res.render('noticias/index.ejs');
});

app.get('/noticias.01', (req, res) => {
  res.render('noticias.01/index.ejs');
});


app.get('/noticias.02', (req, res) => {
  res.render('noticias.02/index.ejs');
});

app.get('/noticias.03', (req, res) => {
  res.render('noticias.03/index.ejs');
});

app.get('/noticias.04', (req, res) => {
  res.render('noticias.04/index.ejs');
});

app.get('/noticias.05', (req, res) => {
  res.render('noticias.05/index.ejs');
});

app.listen (porta, () => {
  console.log("o servidor está funcionando " + porta)
});
