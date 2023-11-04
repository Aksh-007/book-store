import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const dbConnection = async () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then((conn) => {
            console.log(`App is connected to database on ${conn.connection.host}`)
        })
        .catch((err) => {
            console.log(`Error is ${err}`);
            process.exit(1)
        })
}

export default dbConnection;
