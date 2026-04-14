import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import withAuth from "./Middleware/withAuth";
function proxy(request: NextRequest, event: NextFetchEvent) {
  return NextResponse.next();
}

export default withAuth(proxy, ["/profile", "/produk", "/about", "/admin"]);

export const config = {  
  matcher: ["/profile", "/produk", "/about", "/admin"],
};
