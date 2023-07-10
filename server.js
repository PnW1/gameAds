const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const db = require("./db")
const mongoose = require("mongoose")
const { adAds, getAds } =  require("./controllers/ads")
app.use(express.json())


mongoose.connect(db.url).then(()=>{
    console.log("connection established with db")
}).catch((e)=>{
    console.log("DB Connection Error  !!!")
})

app.post('/addad',adAds)
app.get('/getads',getAds)

// app.use(cors)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

module.exports = app