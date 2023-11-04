import express from "express";
const router = express.Router();
import { home, createBook } from "../controller/home.controller.js";

router.get("/", home)
router.post('/createBook', createBook)

export default router;