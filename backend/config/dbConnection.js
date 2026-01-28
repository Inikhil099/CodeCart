const mongoose  = require("mongoose")

async function connectionToDb(url) {
    try {
        return mongoose.connect(url)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = {connectionToDb}