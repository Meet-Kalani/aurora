import { prisma } from "../config/prisma.js";

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

const createProduct = async (product) => {
  const products = await prisma.product.create({
    data: product,
  });

  return products;
};

const findByIdAndUpdate = async (productId, updatedProduct) => {
  const products = await prisma.product.update({
    where: {
      id: productId,
    },
    data: updatedProduct,
  });
  return products;
};

const findByIdAndRemove = async (productId) => {
  const products = await prisma.product.delete({
    where: {
      id: productId,
    },
  });
  return products;
};

export {
  findAllProducts,
  findById,
  createProduct,
  findByIdAndUpdate,
  findByIdAndRemove,
};
