import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { connectToDatabase } from "./utilities/database.js";

import coachesRouter from "./routes/coaches.js";
import requestsRouter from "./routes/requests.js";

import { errorHandler } from "./utilities/error-handling.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/coaches", coachesRouter);
app.use("/requests", requestsRouter);
app.use(errorHandler);

const startServer = async () => {
  const port = process.env.PORT || 3000;
  const devEnvironment = process.env.NODE_ENV === "development";
  try {
    await connectToDatabase();
    app.listen(port, () => {
      if (devEnvironment) {
        console.log(`Server running on http://localhost:${port}.`);
      }
    });
  } catch (error) {
    if (devEnvironment) {
      console.log(error);
    }
    process.exit();
  }
};

startServer();
