import { editItem, removeItem } from "@/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { CartProps } from "./SingleProduct";
import { FormEvent } from "react";
import Image from "next/image";
import { formatPrice, generateAmountOptions } from "@/utils";
import { Button } from "./ui/button";

const CartItem = ({
  cartId,
  title,
  price,
  image,
  amount,
  company,
  productColor,
}: CartProps) => {
  const dispatch = useDispatch();

  function removeItemFromCart() {
    dispatch(removeItem({ cartId }));
  }

  function handleAmount(e: FormEvent<HTMLFormElement>) {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  }
  return (
    <article
      key={cartId}
      className="mb-12 flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <Image
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
        height={24}
        width={24}
        priority
        unoptimized
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title}</h3>
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:{" "}
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            className="mt-2 select select-base select-bordered select-sx"
            value={amount}
            onChange={handleAmount}
            id="amount"
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <Button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </Button>
      </div>
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
