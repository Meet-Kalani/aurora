import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
} from "./product.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { Product, ProductParams } from "./product.schema.js";
import { validateParams } from "../middlewares/validateParams.middleware.js";

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
