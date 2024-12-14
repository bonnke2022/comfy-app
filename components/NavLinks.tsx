import { RootState } from "@/app/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export type LinksProps = {
  id: number;
  url: string;
  text: string;
};

const links: LinksProps[] = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/about", text: "about" },
  { id: 3, url: "/products", text: "products" },
  { id: 4, url: "/cart", text: "cart" },
  { id: 5, url: "/checkout", text: "checkout" },
  { id: 6, url: "/orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((state: RootState) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        if ((link.url === "/checkout" || link.url === "/orders") && !user)
          return null;
        return (
          <li key={link.id}>
            <Link className="capitalize" href={link.url}>
              {link.text}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
