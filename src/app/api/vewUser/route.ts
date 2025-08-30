import { NextResponse } from "next/server";
import { PrismaClient, TipoUsuario } from "@prisma/client";

const prisma = new PrismaClient();


//Rota Get para mostrar Usuarios
export async function GET() {
  try {
    const users = await prisma.usuario.findMany({
      orderBy: { id: "asc" }
    });
    return NextResponse.json(users);
  } catch {
    return NextResponse.json({ error: "Erro ao buscar dado" }, { status: 500 });
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
                tipo_usuario: 
                  body.tipo_usuario === "ADMIN" ? TipoUsuario.ADMIN : TipoUsuario.COMUM
            },
        });
        return NextResponse.json(novoUsuario)
    } catch {
        return NextResponse.json({ error : "Erro ao criar local"}, { status: 500 });
    }
}