import express from "express";
const router = express.Router();
import { home, createBook, getAllBooks, } from "../controller/home.controller.js";

router.get("/", home)
router.post('/createBook', createBook)
router.get("/getAllBooks", getAllBooks)

export default router;