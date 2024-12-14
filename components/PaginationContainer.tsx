"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

type ButtonProps = {
  currentPage: number;
  totalPages: number;
};

const PaginationContainer = ({ currentPage, totalPages }: ButtonProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page: number) => {
    const defaultParams = {
      search: searchParams.get("search") || "",
      page: String(page),
    };
    let params = new URLSearchParams(defaultParams);
    router.push(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex gap-x-2 justify-end">
      {pageButtons.map((page) => {
        return (
          <Button
            key={page}
            size="icon"
            className={`btn btn-xs sm:btn-md border-none join-item bg-base-300 border-base-300`}
            variant={currentPage === page ? "default" : "outline"}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        );
      })}
    </div>
  );
};

export default PaginationContainer;
