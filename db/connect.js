import mongoose from 'mongoose'

// Promises
// mongoose
//     .connect(process.env.DB)
//     .then(() => console.log('Connected to the database...'))
//     .catch((err) => console.group(err))

// async/await
const connectDB = (url) => {
    return mongoose.connect(url)
}

export default connectDB