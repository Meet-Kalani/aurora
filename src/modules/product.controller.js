import {
  findAllProducts,
  findById,
  createProduct,
  findByIdAndUpdate,
  findByIdAndRemove,
} from "./product.data.js";

const getAllProducts = async (req, res) => {
  const products = await findAllProducts();

  res.status(200).json({
    success: true,
    message: "Products fetched successfully.",
    data: products,
  });
};

const getProductById = async (req, res) => {
  const product = await findById(req.params.id);

  res.status(200).json({
    success: true,
    message: "Product fetched successfully.",
    data: product,
  });
};

const createNewProduct = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(200).json({
    success: true,
    message: "Product added successfully.",
    data: product,
  });
};

const updateProduct = async (req, res) => {
  const product = await findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    message: "Product updated successfully.",
    data: product,
  });
};

const removeProduct = async (req, res) => {
  const product = await findByIdAndRemove(req.params.id);

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
