const products = [
  {
    id: "1",
    name: "iPhone 16",
    price: 99999,
    stock: 20,
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
    price: 79999,
    stock: 35,
  },
  {
    id: "3",
    name: "Google Pixel 9",
    price: 69999,
    stock: 15,
  },
  {
    id: "4",
    name: "OnePlus 12",
    price: 64999,
    stock: 25,
  },
  {
    id: "5",
    name: "Nothing Phone 2",
    price: 44999,
    stock: 40,
  },
];

const findAllProducts = () => {
  return products;
};

const findById = (productId) => {
  const product = products.find(({ id }) => productId === id);
  return product;
};

const createProduct = (product) => {
  products.push(product);
  return products;
};

const findByIdAndUpdate = (productId, updatedProduct) => {
  const productIndex = products.findIndex(({ id }) => productId === id);
  products[productIndex] = updatedProduct;
  return products;
};

const findByIdAndRemove = (productId) => {
  const productIndex = products.findIndex(({ id }) => productId === id);
  products.splice(productIndex, 1);
  return products;
};

export {
  findAllProducts,
  findById,
  createProduct,
  findByIdAndUpdate,
  findByIdAndRemove,
};
