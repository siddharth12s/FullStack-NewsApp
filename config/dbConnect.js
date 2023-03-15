const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const dbConnect = async () => {
    const connect =  await mongoose.connect(process.env.CONNECTION_URI, () => {
        console.log("Database connection started")
    })
}

module.exports = dbConnect