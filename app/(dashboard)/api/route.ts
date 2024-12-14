import { customFetch } from "@/utils";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch("/products", { params });
  const products = await response.data.data;
  const meta = await response.data.meta;
  return Response.json({ products, meta, params });
}
