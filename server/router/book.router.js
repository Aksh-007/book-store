import express from "express";
const router = express.Router();
import { home, createBook, getAllBooks, getBookByID, updateBook, deleteBook, } from "../controller/home.controller.js";

router.get("/", home)
router.post("/createBook", createBook)
router.get("/getAllBooks", getAllBooks)
router.get("/getBook/:id", getBookByID)
router.post("/updateBook/:id", updateBook)
router.delete("/deleteBook/:id", deleteBook)

export default router;