import express from "express";
import { Comedian } from "../models/comedian.js";

const router = express.Router();

//get comedian based on id
router.get("/:comedianId", async (req, res) => {   
    try {
        const comedian = await Comedian.findById(req.params.comedianId);
        res.status(200).json(comedian);
    } catch (error) {
        console.error(error);
    } 
});



export { router as comedianRouter}