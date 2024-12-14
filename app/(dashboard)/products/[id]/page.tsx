import { getSingleProduct } from "@/utils/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SingleProduct from "@/components/SingleProduct";

async function SingleProductPage({ params }: { params: { id: number } }) {
  const { id } = await params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SingleProduct productId={id} />
    </HydrationBoundary>
  );
}

export default SingleProductPage;
