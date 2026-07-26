import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express();

import productRoutes from "./src/modules/product.route.js";

app.use(express.json());
app.use(cors());
app.use(helmet());

// for logging the requests
app.use(morgan("dev"));

app.use("/products", productRoutes);

app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
  });
});

export default app;
