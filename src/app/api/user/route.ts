import { NextRequest, NextResponse } from "next/server";

const logUser = {
    username : "teste",
    password : "1234567890",
    token: "fake-jwt-token"
};

export async function POST(req:NextRequest) {
    const { username, password} = await req.json();

    if (username === logUser.username && password === logUser.password) {
        const response = NextResponse.json({ message: "logim bem-sucedido!", token: logUser.token })
    
         // Define o token no cookie para mais segurança
        response.cookies.set("token", logUser.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 dia
            path: "/",
        });
        return response
    }
    return NextResponse.json({ message: "Credenciais inválidas" }, { status: 401 });
}