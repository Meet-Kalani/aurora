import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
} from "./product.controller.js";
import { validate } from "../middlewares/validate.js";
import { Product, ProductParams } from "./product.schema.js";
import { validateParams } from "../middlewares/validateParams.js";

const router = Router();

router.get("/", getAllProducts);

router.get("/:id", validateParams(ProductParams), getProductById);

router.post("/", validate(Product), createNewProduct);

router.put(
  "/:id",
  validateParams(ProductParams),
  validate(Product),
  updateProduct
);

router.delete("/:id", validateParams(ProductParams), removeProduct);

export default router;
