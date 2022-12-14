const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const ConnectDatabase = require("../config/connectDatabase.config")



const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.json())
app.use(cors())

// app.get('/', (req, res) => res.send('Hello Himanshu'))
app.post('/api/v1/register', async (req, res) => {
    console.log(req.body)
    res.send('Hello Himanshu')
})

const port  = process.env.PORT
app.listen(port, async () => {
    try {
        await ConnectDatabase()
    } catch (error) {
        console.log(error.message)
    }
    console.log(`http://localhost:${port}`)
})