import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import  populateComedians from "./controllers/comedianManager.js";

import { questionRouter } from './routes/questions.js';
import { comedianRouter } from './routes/comedians.js'

/* CONFIGURATIONS */

dotenv.config();


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


/* ROUTES */
app.use("/questions", questionRouter);
app.use("/comedians", comedianRouter);


/* MONGODB CONNECTION */

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGODB_URI).then(() => {
    populateComedians(); 
}).then(() => {
    app.listen(PORT, () => console.log(`Server Started on Port: ${PORT}`));
}).catch((error) => console.log(`Error did not connect: ${error}`));