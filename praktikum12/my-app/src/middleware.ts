import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import withAuth from "./Middleware/withAuth";

export function mainMiddleware(req: NextRequest, event: NextFetchEvent) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/profile"]);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};