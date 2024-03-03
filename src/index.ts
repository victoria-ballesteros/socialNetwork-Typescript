import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connection from "./database/connection";

const BASE_URL = process.env.BASE_URL;

dotenv.config();
connection()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

const corsOptions = {
  origin: [`${BASE_URL}/api/laptops`],
};

app.use(cors(corsOptions));

app.use(express.json());
