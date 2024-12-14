"use client";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { getProducts } from "@/utils/actions";
import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

export type ProductsAttribute = {
  title: string;
  price: string;
  image: string;
  description: string;
  colors: string[];
  company: string;
};

export type ParamsProps = {
  search: string;
  company: string;
  category: string;
  order: string;
  shipping: boolean;
};

export type MetaProps = {
  categories: string[];
  companies: string[];
  pagination: PageProps;
};

export type PageProps = {
  page: number;
  pageCount: number;
  pageSize: 10;
  total: 22;
};

export type ProductsProps = {
  attributes: ProductsAttribute;
  id: number;
};

export type DataProps = {
  products: ProductsProps;
  meta?: MetaProps;
};

export function featuredOptions() {
  return queryOptions({
    queryKey: ["products", "hero"],
    queryFn: () => getProducts(),
  });
}

const FeaturedProducts = () => {
  const { data, isPending } = useQuery(featuredOptions());

  const products: ProductsProps[] = data?.products;

  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </div>
  );
};

export default FeaturedProducts;
