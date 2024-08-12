import { JwtPayload, jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
const AuthRouts = ["/login", "/register"];
const roleBasedPrivateRoutes = {
  user: [/^\/dashboard$/],
  admin: [/^\/dashboard\/admin/],
};
type Role = keyof typeof roleBasedPrivateRoutes;
interface DecodedToken extends JwtPayload {
  role: Role;
}
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRouts.includes(pathname)) {
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
  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*"],
};
