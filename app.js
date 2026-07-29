import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

import { errorHandler } from "./src/middlewares/errorHandler.js";
import productRoutes from "./src/modules/product.route.js";
import { notFound } from "./src/middlewares/notFound.js";

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/products", productRoutes);

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});

export default app;
