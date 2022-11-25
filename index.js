import express from "express";
import cors from "cors";
import winston from "winston";
import clientRouter from "./routes/client.routes.js";
import usuarioRouter from "./routes/usuario.routes.js";

const { combine, timestamp, label, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
  lever: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "store-api.log" }),
  ],
  format: combine(label({ label: "store-api" }), timestamp(), myFormat),
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/client", clientRouter);
app.use("/usuarios", usuarioRouter);
app.use((err, req, res, next) => {
    logger.error(` ${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({error: err.message})
})
app.listen(3000, () => console.log("API Started"));
