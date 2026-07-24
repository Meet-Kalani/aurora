import z from "zod";

const Product = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
});

export { Product };
