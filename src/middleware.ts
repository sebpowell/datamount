import { NextMiddlewareResult } from "next/dist/server/web/types";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { routes } from "@/packages/utils/routes";

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse,
) => NextMiddlewareResult | Promise<NextMiddlewareResult>;

type MiddlewareFactory = (middleware: CustomMiddleware) => CustomMiddleware;

export function chain(
  functions: MiddlewareFactory[],
  index = 0,
): CustomMiddleware {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    return response;
  };
}

export function withCors(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const res = NextResponse.next();

    res.headers.append("Access-Control-Allow-Credentials", "true");

    res.headers.append("Access-Control-Allow-Origin", "*");

    res.headers.append("Access-Control-Allow-Methods", "GET");

    res.headers.append(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    );

    return middleware(request, event, res);
  };
}

export function withAuth(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const res = NextResponse.next();

    const token = await getToken({ req: request });

    // Skip API requests as they're handled by token system
    if (!token && !request.nextUrl.pathname.includes("api"))
      return NextResponse.redirect(
        new URL(routes.getRoute("auth_login"), request.url),
      );

    return middleware(request, event, res);
  };
}

export default chain([withCors, withAuth]);

export const config = {
  matcher: ["/account/:path*"],
};
