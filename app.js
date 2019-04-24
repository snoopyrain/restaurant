
//include express , handlebars
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000

const restaurantList = require('./restaurant.json')

//setting template engine
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

//setting routes for get

app.get('/',(req, res)=>{
  res.render('index',{restaurants: restaurantList.results})
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.filter(rest=>rest.id==req.params.restaurant_id)
  console.log(restaurant)
  res.render('show', { restaurant: restaurant[0] })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  console.log(keyword)
  const restaurant =restaurantList.results.filter(
    res=> {return res.name.toLowerCase().includes(keyword.toLowerCase())})
  console.log(restaurant)
    res.render('index',{restaurants: restaurant})
})

app.listen(port, ()=>{
  console.log(`Express app listening on port ${port}.`)
})

