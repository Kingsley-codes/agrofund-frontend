// middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const token = isAdminRoute
    ? req.cookies.get("admin_token")?.value
    : req.cookies.get("user_token")?.value;
  const redirectTo = isAdminRoute ? "/admin/login" : "/login";

  console.log("MIDDLEWARE HIT:", {
    pathname,
    isAdminRoute,
    token: token ? `exists (${token.slice(0, 20)}...)` : "MISSING",
    allCookies: req.cookies.getAll().map((c) => c.name), // see ALL cookie names
  });

  if (!token) {
    console.log("REDIRECTING TO:", redirectTo);
    return NextResponse.redirect(new URL(redirectTo, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/dashboard/:path*"],
};
