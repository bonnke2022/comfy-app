"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { formatPrice } from "@/utils";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { CategoryMode, CompanyMode, OrderMode } from "@/utils/types";

const Filters = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("categoryMode") || "all";
  const company = searchParams.get("companyMode") || "all";
  const order = searchParams.get("orderMode") || "a-z";
  const checkBox = searchParams.get("checkBox") || "true";

  const step = 1000;
  const maxPrice = 1000000;
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);

  const router = useRouter();
  const pathname = usePathname();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    const params = new URLSearchParams();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const category = formData.get("categoryMode") as string;
    const company = formData.get("companyMode") as string;
    const order = formData.get("orderMode") as string;
    const checkBox = formData.get("checkBox") as string;

    params.set("search", search);
    params.set("categoryMode", category);
    params.set("companyMode", company);
    params.set("orderMode", order);
    params.set("checkBox", checkBox);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
    >
      <div className="form-control">
        <label htmlFor="search" className="label">
          <span className="label-text capitalize">search product</span>
        </label>
        <Input
          type="text"
          name="search"
          defaultValue={search}
          className="input input-bordered input-sm"
        />
      </div>
      <div className="form-control">
        <label htmlFor="category" className="label">
          <span className="label-text capitalize">select category</span>
        </label>
        <Select defaultValue={category} name="category">
          <SelectTrigger className="select select-bordered select-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {["all", ...Object.values(CategoryMode)].map((categoryMode) => {
              return (
                <SelectItem key={categoryMode} value={categoryMode}>
                  {categoryMode}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="form-control">
        <label htmlFor="company" className="label">
          <span className="label-text capitalize">select company</span>
        </label>
        <Select defaultValue={company} name="company">
          <SelectTrigger className="select select-bordered select-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {["all", ...Object.values(CompanyMode)].map((companyMode) => {
              return (
                <SelectItem key={companyMode} value={companyMode}>
                  {companyMode}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="form-control">
        <label htmlFor="order" className="label">
          <span className="label-text capitalize">sort by</span>
        </label>
        <Select defaultValue={order} name="order">
          <SelectTrigger className="select select-bordered select-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[...Object.values(OrderMode)].map((orderMode) => {
              return (
                <SelectItem key={orderMode} value={orderMode}>
                  {orderMode}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <div className="form-control">
        <label htmlFor="price" className="label cursor-pointer">
          <span className="label-text capitalize">select price</span>
          <span>{formatPrice(selectedPrice)}</span>
        </label>
        <Slider
          min={0}
          max={maxPrice}
          step={step}
          className="range range-primary range-sm"
        />
        <div className="w-full flex justify-between text-xs px-2 mt-2">
          <span className="font-bold text-md">0</span>
          <span className="font-bold text-md">
            Max : {formatPrice(maxPrice)}
          </span>
        </div>
      </div>
      <div className="form-control flex flex-col items-center justify-center">
        <label htmlFor="shipping" className="label cursor-pointer">
          <span className="label-text capitalize">free shipping</span>
        </label>
        <Checkbox
          name="shipping"
          defaultValue={checkBox}
          className="checkbox checkbox-primary checkbox-sm"
        />
      </div>
      <Button type="submit" className="btn btn-primary btn-sm">
        search
      </Button>
      <Link href="/products" className="btn btn-accent btn-sm">
        reset
      </Link>
    </form>
  );
};

export default Filters;
