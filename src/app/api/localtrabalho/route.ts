// app/api/localtrabalho/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";

const prisma = new PrismaClient();

// ⚠️ Usa a chave segura (service_role) só no backend
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const nome = formData.get("nome") as string;
    const descricao = formData.get("descricao") as string;
    const linhaVida = formData.get("linhaVida") === "true";

    // cria local no banco
    const local = await prisma.localTrabalho.create({
      data: {
        nome,
        coordenadas: "0,0",
        regiao: "Indefinida",
        descricao,
        linha_vida: linhaVida, // <-- adiciona iss
      },
    });

    // upload das imagens para Supabase Storage
    const fotos = formData.getAll("fotos") as File[];
    const urls: string[] = [];

    for (const foto of fotos) {
      const arrayBuffer = await foto.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const {  error } = await supabase.storage
        .from("torres")
        .upload(`local-${local.id}/${Date.now()}-${foto.name}`, buffer, {
        contentType: foto.type,
        upsert: true,
      });

      if (error) throw error;

      const { data: publicUrl } = supabase.storage
        .from("torres")
        .getPublicUrl(`local-${local.id}/${foto.name}`);

      urls.push(publicUrl.publicUrl);

      await prisma.registroImagem.create({
        data: {
          usuario_id: 1,
          local_trabalho_id: local.id,
          url_imagem: publicUrl.publicUrl,
          descricao,
        },
      });
    }

    return NextResponse.json({ local, fotos: urls, linhaVida });
  } catch (error: unknown) {
  console.error("Erro no POST /localtrabalho:", error);

  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { error: "Erro ao salvar dados" },
    { status: 500 }
  );
}

}
