import Image from "next/image";
import Link from "next/link";
import { ProductsProps } from "./FeaturedProducts";

const ProductsGrid = ({ products }: { products: ProductsProps[] }) => {
  if (!products) {
    return <h2 className="pt-12 ">No products found...</h2>;
  }
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => {
        return (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <Image
                src={product.attributes.image}
                alt={product.attributes.title}
                width={30}
                height={30}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                unoptimized
                priority
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">
                {product.attributes.title}
              </h2>
              <span className="text-secondary">
                ${product.attributes.price}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
