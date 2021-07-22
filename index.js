const express = require('express')
const bodyParser = require('body-parser')
const weatherReq = require('./requests/weather.requests')

const app = express()

// f6a106e8c227508f4eaaac4adf72e4d2

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null})
})

app.post('/', async (req, res) => {
    const { city } = req.body
    
    const {weather, error} = await weatherReq(city)
   
    
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    console.log('QQ server');
})