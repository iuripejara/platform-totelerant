import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function GET() {
    try {
        const locais = await prisma.localTrabalho.findMany({
            orderBy: { id: "desc" },
        });
        return NextResponse.json(locais);
    }catch(error){
        return NextResponse.json({error :  "Error ao buscar dado"},{status: 500})
    }
}


export async function POST(req:Request) {
    try {
        const body = await req.json();

        const novoLocal = await prisma.localTrabalho.create({
            data: {
                nome:body.nome,
                coordenadas : body.coordenadas,
                regiao: body.regiao,
                descricao: body.descricao,
            },
        });
        return NextResponse.json(novoLocal);
    } catch {
    return NextResponse.json({ error: "Erro ao criar local" }, { status: 500 });
  }
}