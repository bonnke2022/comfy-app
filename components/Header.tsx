"use client";
import { RootState } from "@/app/store";
import { clearCart } from "@/features/cart/cartSlice";
import { logoutUser } from "@/features/user/userSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userState.user);
  const router = useRouter();

  function handleLogout() {
    router.push("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  }
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link href="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link
              href="/register"
              className="link link-hover text-xs sm:text-sm"
            >
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
