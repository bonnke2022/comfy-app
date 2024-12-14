import * as z from "zod";

export const createInputSchema = z.object({
  username: z.string().min(2, {
    message: "username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
});

export type CreateInputType = z.infer<typeof createInputSchema>;

export enum CategoryMode {
  Tables = "Tables",
  Chairs = "Chairs",
  Kid = "Kids",
  Sofas = "Sofas",
  Beds = "Beds",
}

export enum CompanyMode {
  Modenza = "Modenza",
  Luxora = "Luxora",
  Artifex = "Artifex",
  Comfora = "Comfora",
  Homestead = "Homestead",
}

export enum OrderMode {
  AZ = "a-z",
  ZA = "z-a",
  High = "high",
  Low = "low",
}

export const searchSchema = z.object({
  search: z.string().min(2, {
    message: "search must be at least 2 characters.",
  }),
  category: z.nativeEnum(CategoryMode),
  company: z.nativeEnum(CompanyMode),
  order: z.nativeEnum(OrderMode),
  checkBox: z.boolean().default(false).optional(),
});

export type SearchType = z.infer<typeof searchSchema>;
