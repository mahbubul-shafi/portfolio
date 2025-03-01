const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/portfolioRoute')
const port = process.env.PORT || 5000
const dotenv = require('dotenv')

app.use(cors())
dotenv.config()
app.use(express.json())

app.use('/api/v1/portfolio', router)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})