import express from "express";
import { config } from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

// Importing Routers
import user from "./routes/user.js";

config({
  path: "./.env",
});

export const app = express();

// Using middleware
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.use("/api/v1/user", user);

// Using Error Middleware
app.use(errorMiddleware);
