
//include express , handlebars
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

//setting template engine
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//setting routes for get

app.get('/',(req, res)=>{
  res.render('index')
})

app.listen(port, ()=>{
  console.log(`Express app listening on port ${port}.`)
})