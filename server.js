const path = require('path')
const express = require('express')
const fs = require('fs')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const gameFile = "./savedGames.json"
var savedGames = require(gameFile)

var app = express()
var port = process.env.PORT || 3000

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', function(req , res){
  res.status(200).render('index')
})

app.get('/lobby', function(req, res, next) {
  res.status(200).render('lobby', {
  })
})

app.get('/gallery', function(req, res, next) {
  res.status(200).render('gallery', {
    posts: savedGames
  })
})

app.get('*', function (req, res) {
  res.status(404).render('404')
})

app.post('/upload', function(req, res) {
  if (req.body && req.body.game && req.body.title) {
    console.log("== Client uploaded a game: ")
    console.log(" - " + req.body.title)
    console.log(" - " + req.body.game)
    
    savedGames.push({"savedTitle" : req.body.title, "savedPost" : req.body.game})
    fs.writeFile(gameFile, JSON.stringify(savedGames), function(err) {
      if (err) {
        console.log(err)
      } else {
        console.log(" - Game file saved successfully!")
      }
    })
    
    res.status(200).send("Game successfully added to gallery")
  } else {
    res.status(400).send("Bad upload")
  }
})

app.listen(port, function () {
  console.log("== Server is listening on port", port)
})

