import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.CHAVE_SECRETA);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // Protege /painel e /painelAdmUser
  if (
    !token &&
    (req.nextUrl.pathname.startsWith("/painel") ||
      req.nextUrl.pathname.startsWith("/painelAdmUser"))
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Protege rota admin
  if (req.nextUrl.pathname.startsWith("/painelAdmUser")) {
    try {
      const { payload } = await jwtVerify(token!, SECRET);

      if (payload.tipo_usuario !== "ADMIN") {
        return NextResponse.redirect(new URL("/painel", req.url));
      }
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/painel/:path*", "/painelAdmUser/:path*"],
};
