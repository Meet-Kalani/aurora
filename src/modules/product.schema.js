import z from "zod";

const Product = z.object({
  name: z.string().min(1),
  price: z.number().int().nonnegative(),
  stock: z.number().int().nonnegative().default(0),
});

const ProductParams = z.object({
  id: z.coerce.number().int().positive(),
});

export { Product, ProductParams };
