const http = require("http");
const mongoose = require("mongoose")

const PORT = 5000;
mongoose.set('strictQuery', false)
const DB = "mongodb+srv://ulka:ulka2005@cluster0.0ztiq13.mongodb.net/test"

const app = require("./app");

const connectDB = async () => {
    await mongoose
        .connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("DB Connection established")
        })
        .catch(e => {
            console.log(e)
        })
}

connectDB();

const server = http.createServer(app);

async function startServer() {
    server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}...`);
    })
}

startServer();