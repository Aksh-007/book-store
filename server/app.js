import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/dbConnection.js"
import router from "./router/book.router.js";
const app = express();
dotenv.config();
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Book router middleware
app.use('/api/v1', router)

export default app;