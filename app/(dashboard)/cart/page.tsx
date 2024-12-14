"use client";
import { RootState } from "@/app/store";
import CartItemsList from "@/components/CartItemsList";
import CartTotals from "@/components/CartTotals";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { useSelector } from "react-redux";

function CartPage() {
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart
  );
  const { user } = useSelector((state: RootState) => state.userState);

  if (numItemsInCart === 0) {
    return <SectionTitle text="Your  cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link href="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link href="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
