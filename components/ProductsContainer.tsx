"use client";
import { getAllProducts } from "@/utils/actions";
import { queryOptions, useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import { Button } from "./ui/button";
import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import { LayoutGrid, LayoutList } from "lucide-react";
import { MetaProps, ProductsProps } from "./FeaturedProducts";
import { useSearchParams } from "next/navigation";
import PaginationContainer from "./PaginationContainer";

// export function groupOptions() {
//   return queryOptions({
//     queryKey: ["all products"],
//     queryFn: () => getAllProducts({}),
//   });
// }

const ProductsContainer = () => {
  const [layout, setLayout] = useState("grid");
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("categoryMode") || "all";
  const company = searchParams.get("companyMode") || "all";
  const order = searchParams.get("orderMode") || "a-z";

  const { data, isPending } = useQuery({
    queryKey: ["all products"],
    queryFn: () => getAllProducts({ search, category, company, order }),
  });
  if (!data) {
    return <h2 className="pt-12 ">No products found...</h2>;
  }

  const products: ProductsProps[] = data?.filteredProducts;

  const meta = data.meta;
  // console.log(meta.pagination.pageSize);
  const totalPages = meta.pagination.pageCount || 0;
  const page = meta.pagination.page || 0;
  const total = Number(meta.pagination.total) || 0;

  // console.log(total, totalPages, page, meta.pagination.pageSize);

  const setActiveStyles = (pattern: string) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {total} product{total > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <Button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <LayoutGrid />
          </Button>
          <Button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <LayoutList />
          </Button>
        </div>
      </div>
      <div>
        {total === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductList products={products} />
        )}
      </div>
      <div className="mt-8">
        {totalPages < 2 ? null : (
          <PaginationContainer currentPage={page} totalPages={totalPages} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
