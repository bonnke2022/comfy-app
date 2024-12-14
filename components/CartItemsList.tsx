import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemsList = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartState);

  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartId} cartItem={item} />;
      })}
    </div>
  );
};

export default CartItemsList;
