import products from "@/data/products.json";
import { allowedOrigins } from "@/libs/configs/config.serverList";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Get the search query from the URL parameters
  const searchQuery =
    request.nextUrl.searchParams.get("query")?.toLowerCase() || "";

  const resultProducts = products.productsList.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery)
  );

  return NextResponse.json({
    productsList: resultProducts,
  });
}
