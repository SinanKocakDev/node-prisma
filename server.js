import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);
const port = process.env.PORT || 5001;
import cors from "cors";
import { connectDB } from "./config/dbConnect.js";
import { corsOptions } from "./helpers/corsOptions.js";
import logger from "morgan";
app.set("port", port);
connectDB();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);

app.use(logger("dev"));

server.listen(port, () => {
  console.log(`server started ${port} port....`);
});
