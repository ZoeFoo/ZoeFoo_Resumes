const Mongoose = require("mongoose");

const localDB = `mongodb://192.168.1.230:27018/ZoeCV`
const connectDB = async () => {
    await Mongoose.connect(localDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log("MongoDB Connected")
        })
        .catch((e) => {
            console.log('Error connecting to MongoDB', e);
        })
}
module.exports = connectDB
