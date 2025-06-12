const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log("db connected")
    } catch(err) {
        console.log(err)
    }
}

module.exports = dbConnect