import { PrismaClient, } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

const prisma = new PrismaClient()
const SECRET = process.env.CHAVE_SECRETA as string

export async function POST(req:NextRequest) {
    try {
        const { username, password } = await req.json();

        const user = await prisma.usuario.findUnique({
            where: { username },
        })
        if (!user || user.senha !== password) {
            return NextResponse.json({ message: "Credenciais invalida"}, { status : 401 })
        }

        const token = jwt.sign(
            { id : user.id, tipo_usuario: user.tipo_usuario },
            SECRET,
            { expiresIn: "1d" }
        );

        const response = NextResponse.json({
            message: "Login bem sucedido",
            token,
        });
        response.cookies.set("token", token,{ 
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24,
            path: "/"
        });
        return response;
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Error no servidor"}, { status: 500  })
    }
}