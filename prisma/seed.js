import "dotenv/config";
import { prisma } from "../src/config/prisma.js";

const products = [
  { name: "iPhone 16", price: 99999, stock: 20 },
  { name: "Samsung Galaxy S24", price: 79999, stock: 35 },
  { name: "Google Pixel 9", price: 69999, stock: 15 },
  { name: "OnePlus 12", price: 64999, stock: 25 },
  { name: "Nothing Phone 2", price: 44999, stock: 40 },
];

async function main() {
  console.log("Seeding database...");

  await prisma.product.createMany({
    data: products,
    skipDuplicates: true,
  });

  console.log(`Seeded ${products.length} products.`);
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(() => prisma.$disconnect());
