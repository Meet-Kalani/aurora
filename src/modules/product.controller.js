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
  const product = findById(Number(req.params.id));

  res.status(200).json({
    success: true,
    message: "Product fetched successfully.",
    data: product,
  });
};

const createNewProduct = (req, res) => {
  const products = createProduct(req.body.product);

  res.status(200).json({
    success: true,
    message: "Product added successfully.",
    data: products,
  });
};

const updateProduct = (req, res) => {
  const products = findByIdAndUpdate(Number(req.params.id), req.body.product);

  res.status(200).json({
    success: true,
    message: "Product udpated successfully.",
    data: products,
  });
};

const removeProduct = (req, res) => {
  const products = findByIdAndRemove(Number(req.params.id));

  res.status(200).json({
    success: true,
    message: "Product removed successfully.",
    data: products,
  });
};

export {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  removeProduct,
};
