// require('dotenv').config()
import dotenv from "dotenv"


dotenv.config({
    path: './env'
})

// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/$
//             {PRO_DB}`)
//     } catch (error) {
//         console.error("Error: ",error)
//         throw error
//     }
// })()