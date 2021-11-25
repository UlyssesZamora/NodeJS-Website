const express = require("express")
const app = express()
var faker = require('faker');
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/python', (req, res) => {
  res.render('python')
});

app.get('/cpp', (req, res) => {
  res.render('cpp')
});

app.get('/javascript', (req, res) => {
  res.render('javascript')
});

app.get('/faker', (req, res) => {
  let randomCard = faker.helpers.createCard();
  console.log(randomCard)
  res.render('faker', {'fakeInfo':randomCard})
});

app.listen(3000, () => {
  console.log('server started');
});