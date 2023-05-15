import express from "express";
import { config } from "dotenv";

// Importing Routers
import user from "./routes/user.js";

config({
  path: "./.env",
});

export const app = express();

// Using middleware
app.use(express.json());

app.get("/", (req, res) => res.send({ status: "API running!" }));

app.use("/api/v1/user", user);
