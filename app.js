import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

// for logging the requests
app.use(morgan("dev"));

export default app;
