import Filters from "@/components/Filters";
import ProductsContainer from "@/components/ProductsContainer";
import { getAllProducts } from "@/utils/actions";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function ProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["all-products", "heroes"],
    queryFn: () => getAllProducts({}),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Filters />
      <ProductsContainer />
    </HydrationBoundary>
  );
}

export default ProductsPage;
