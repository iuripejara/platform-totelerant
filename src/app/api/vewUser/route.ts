import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma";


const prisma = new PrismaClient()

//Rota Get para mostrar Usuarios
export async function GET() {
    try {
        const user = await prisma.usuario.findMany({
            orderBy: { id: "asc" }
        });
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ error: "Error ao buscar dado" }, { status: 500 })
    }
}


// Rot POST para add um Usuario

export async function POST(req:Request) {
    try {
        const body = await req.json();

        const novoUsuario = await prisma.usuario.create({
            data: {
                nome: body.nome,
                username: body.username,
                senha:body.senha,
                email: body.email,
            },
        });
        return NextResponse.json(novoUsuario)
    } catch (error) {
        return NextResponse.json({ error : "Erro ao criar local"}, { status: 500 });
    }
}