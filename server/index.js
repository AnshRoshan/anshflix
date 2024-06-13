import cookieParser from 'cookie-parser'
import cors from 'cors'
// import 'dotenv/config'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'
import routes from './src/routes/index.js'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1', routes)

//log a meesage for get  /api/v1 request
app.get('/api/v1', (req, res) => {
  res.send('Hello from the API')
})

const port = process.env.PORT || 5000

const server = http.createServer(app)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Mongodb connected')
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  })
  .catch((err) => {
    console.log({ err })
    process.exit(1)
  })

//test
