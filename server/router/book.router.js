import express from "express";
const router = express.Router();
import { home, createBook, getAllBooks, getBookByID, } from "../controller/home.controller.js";

router.get("/", home)
router.post("/createBook", createBook)
router.get("/getAllBooks", getAllBooks)
router.get("/getBook/:id", getBookByID)

export default router;