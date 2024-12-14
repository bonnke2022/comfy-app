import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/utils";
import { ProductsProps } from "./FeaturedProducts";

const ProductList = ({ products }: { products: ProductsProps[] }) => {
  if (!products) {
    return <h2 className="pt-12 ">No products found...</h2>;
  }

  return (
    <div>
      {products.map((product) => {
        return (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <Image
              src={product.attributes.image}
              alt={product.attributes.title}
              width={30}
              height={30}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
              unoptimized
              priority
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">
                {product.attributes.title}
              </h3>
              <h4 className="capitalize text-md text-neutral-content">
                {product.attributes.company}
              </h4>
              <p className="font-medium ml-0 sm:ml-auto text-lg">
                ${formatPrice(Number(product.attributes.price))}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductList;
