import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js"

const app = express();
dotenv.config();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send(`<h1>App is working</h1>`)
})
export default app;