"use client";
import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "@/utils/actions";
import { formatPrice } from "@/utils";
import { FormEvent, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import { ProductsProps } from "./FeaturedProducts";

export type CartProps = {
  cartId: string;
  productId: number;
  image: string;
  title: string;
  price: number;
  productColor: string;
  amount: number;
  company: string;
};

const SingleProduct = ({ productId }: { productId: number }) => {
  const { data, isPending } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getSingleProduct(productId),
  });

  const dispatch = useDispatch();

  const product: ProductsProps = data?.product;
  const { image, title, price, description, company, colors } =
    product.attributes;

  const dollarsAmount = formatPrice(Number(price));
  const [amount, setAmount] = useState(1);
  const [productColor, setProductColor] = useState(colors[0]);

  const cartProduct: CartProps = {
    cartId: productId + productColor,
    productId: productId,
    image,
    title,
    price: +dollarsAmount,
    productColor,
    amount,
    company,
  };

  function handleAmount(e: FormEvent<HTMLFormElement>) {
    setAmount(parseInt(e.target.value));
  }

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <Image
          src={image}
          alt={title}
          width={30}
          height={30}
          unoptimized
          priority
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
      </div>
      <div>
        <h1 className="capitalize text-3xl font-bold">{title}</h1>
        <h4 className="text-xl text-neutral-content font-bold mt-2">
          {company}
        </h4>
        <p className="mt-3 text-xl">{dollarsAmount}</p>
        <p className="mt-6 leading-8">{description}</p>
      </div>
      <div className="mt-6">
        <h4 className="text-md font-medium tracking-wider capitalize">
          colors
        </h4>
        <div className="mt-2">
          {colors.map((color: string) => {
            return (
              <Button
                key={color}
                type="button"
                className={`badge w-6 h-6 mr-2 ${
                  color === productColor && "border-2 border-secondary"
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setProductColor(color)}
              ></Button>
            );
          })}
        </div>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <h4 className="text-md font-medium tracking-wider capitalize">
            amount
          </h4>
        </label>
        <select
          className="select select-secondary select-bordered select-md"
          value={amount}
          onChange={handleAmount}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
      <div className="mt-10">
        <Button className="btn btn-secondary btn-md" onClick={addToCart}>
          Add to bag
        </Button>
      </div>
    </section>
  );
};

export default SingleProduct;
