import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
} from "./product.controller.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", createNewProduct);

router.put("/:id", updateProduct);

router.delete("/:id", removeProduct);

export default router;
