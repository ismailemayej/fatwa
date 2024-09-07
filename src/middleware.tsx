import { JwtPayload, jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const AuthRoutes = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  user: [/^\/dashboard$/, "/dashboard/edit", "/ask_question"],
  admin: [
    /^\/dashboard\/admin$/,
    "/dashboard/admin/users",
    "/dashboard/edit",
    "/dashboard/admin/pending",
    "/dashboard/admin/answer",
    "/ask_question",
  ],
};
type Role = keyof typeof roleBasedPrivateRoutes;
interface DecodedToken extends JwtPayload {
  role: Role;
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  let decodedData: DecodedToken | null = null;
  try {
    decodedData = jwtDecode<DecodedToken>(accessToken);
  } catch (error) {
    console.error("Invalid token", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = decodedData?.role;

  if (role && roleBasedPrivateRoutes[role]) {
    const routes = roleBasedPrivateRoutes[role];
    if (
      routes.some((route) =>
        typeof route === "string"
          ? pathname.includes(route)
          : (route as RegExp).test(pathname)
      )
    ) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*", "/ask_question"],
};
