const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


const ConnectDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (error) {
        console.log(error.message)
    }
}


module.exports = ConnectDatabase