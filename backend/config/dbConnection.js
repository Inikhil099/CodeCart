import mongoose from "mongoose"

export async function connectionToDb(url) {
    try {
        return mongoose.connect(url)
    } catch (error) {
        console.log(error)
    }
    
}
