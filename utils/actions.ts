import { MetaProps, ProductsProps } from "@/components/FeaturedProducts";
import { customFetch } from "./index";
import { CategoryMode } from "./types";
import { toast } from "@/hooks/use-toast";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
const url = "/products?featured=true";

export async function getProducts() {
  const response = await customFetch(url);
  const products = await response.data.data;
  return { products };
}

export async function getSingleProduct(id: number) {
  const response = await customFetch(`/products/${id}`);
  const product = await response.data.data;
  return { product };
}

export type SearchProps = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  shipping?: boolean;
};

export async function getAllProducts({
  search,
  category,
  company,
  order,
  shipping,
}: SearchProps) {
  const response = await customFetch("/products");
  const products = await response.data.data;
  const meta: MetaProps = await response.data.meta;
  const filteredProducts = products.filter((item: ProductsProps) => {
    if (search) {
      const matchesSearch = item.attributes.title
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesSearch;
    } else {
      return products;
    }
  });

  return { filteredProducts, meta };
}

export async function action({ request }: { request: NextRequest }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast({ description: "account created successfully" });
    redirect("/login");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      "please double check your credentials";
    toast({ description: errorMessage });
    return null;
  }
}
