import FeaturedProducts from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { getProducts } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function LandingPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products", "heroes"],
    queryFn: () => getProducts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hero />
      <FeaturedProducts />
    </HydrationBoundary>
  );
}

export default LandingPage;
