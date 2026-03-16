// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const token = isAdminRoute
    ? req.cookies.get("admin_token")?.value
    : req.cookies.get("user_token")?.value;
  const redirectTo = isAdminRoute ? "/admin/login" : "/login";

  if (!token) {
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
