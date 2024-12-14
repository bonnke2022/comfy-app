import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20">{children}</section>
    </>
  );
}

export default layout;
