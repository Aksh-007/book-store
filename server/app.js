import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send(`<h1>App is working</h1>`)
})
export default app;