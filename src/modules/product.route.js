import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
} from "./product.controller.js";
import { validate } from "../middlewares/validate.js";
import { Product } from "./product.schema.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.post("/", validate(Product), createNewProduct);

router.put("/:id", validate(Product), updateProduct);

router.delete("/:id", removeProduct);

export default router;
