import { prisma } from "../config/prisma.js";
import { NotFoundError } from "../utils/errors.js";

const handleNotFound = (err) => {
  if (err.code === "P2025") {
    throw new NotFoundError("Product with the given id does not exist.");
  }

  throw err;
};

const findAllProducts = async () => {
  const products = await prisma.product.findMany();

  return products;
};

const findById = async (productId) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  return product;
};

const createProduct = async (newProduct) => {
  const product = await prisma.product.create({
    data: newProduct,
  });

  return product;
};

const findByIdAndUpdate = async (productId, updatedProduct) => {
  const product = await prisma.product
    .update({
      where: {
        id: productId,
      },
      data: updatedProduct,
    })
    .catch(handleNotFound);

  return product;
};

const findByIdAndRemove = async (productId) => {
  const product = await prisma.product
    .delete({
      where: {
        id: productId,
      },
    })
    .catch(handleNotFound);

  return product;
};

export {
  findAllProducts,
  findById,
  createProduct,
  findByIdAndUpdate,
  findByIdAndRemove,
};
