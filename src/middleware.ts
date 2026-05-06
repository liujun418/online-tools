import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_USER = "jzerov";
const ADMIN_PASSWORD = "T3705456";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const base64 = authHeader.split(" ")[1];
    const decoded = atob(base64);
    const [user, password] = decoded.split(":");

    if (user === ADMIN_USER && password === ADMIN_PASSWORD) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": "Basic realm=ToolBoxOnline Admin" },
  });
}

export const config = {
  matcher: "/admin/:path*",
};
