"use client";
import { Moon, Sun, AlignRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { toggleTheme } from "@/features/user/userSlice";

const Navbar = () => {
  const numItemsInCart = useSelector(
    (state: RootState) => state.cartState.numItemsInCart
  );

  const dispatch = useDispatch();

  function handleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link
            href="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <AlignRight className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <Input type="checkbox" onChange={handleTheme} />
            <Sun className="swap-on h-8 w-8" />
            <Moon className="swap-off h-8 w-8" />
          </label>
          <Link href="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <ShoppingCart className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
