import {
  findAllProducts,
  findById,
  createProduct,
  findByIdAndUpdate,
  findByIdAndRemove,
} from "./product.data.js";

const getAllProducts = (req, res) => {
  const products = findAllProducts();

  res.status(200).json({
    success: true,
    message: "Products fetched successfully.",
    data: products,
  });
};

const getProductById = (req, res) => {
  const product = findById(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product fetched successfully.",
    data: product,
  });
};

const createNewProduct = (req, res) => {
  const product = createProduct(req.body);

  res.status(200).json({
    success: true,
    message: "Product added successfully.",
    data: product,
  });
};

const updateProduct = (req, res) => {
  const product = findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Product updated successfully.",
    data: product,
  });
};

const removeProduct = (req, res) => {
  const product = findByIdAndRemove(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product removed successfully.",
    data: product,
  });
};

export {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
};
