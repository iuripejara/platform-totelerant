-- CreateEnum
CREATE TYPE "public"."TipoUsuario" AS ENUM ('ADMIN', 'COMUM');

-- CreateTable
CREATE TABLE "public"."Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo_usuario" "public"."TipoUsuario" NOT NULL DEFAULT 'COMUM',

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LocalTrabalho" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "coordenadas" TEXT NOT NULL,
    "regiao" TEXT NOT NULL,
    "descricao" TEXT,
    "linha_vida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "LocalTrabalho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Equipe" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "local_trabalho_id" INTEGER NOT NULL,

    CONSTRAINT "Equipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MembroEquipe" (
    "usuario_id" INTEGER NOT NULL,
    "equipe_id" INTEGER NOT NULL,

    CONSTRAINT "MembroEquipe_pkey" PRIMARY KEY ("usuario_id","equipe_id")
);

-- CreateTable
CREATE TABLE "public"."RegistroImagem" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "local_trabalho_id" INTEGER NOT NULL,
    "url_imagem" TEXT NOT NULL,
    "descricao" TEXT,
    "horario_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latitude" DECIMAL(9,6),
    "longitude" DECIMAL(9,6),

    CONSTRAINT "RegistroImagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "public"."Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_username_key" ON "public"."Usuario"("username");

-- AddForeignKey
ALTER TABLE "public"."Equipe" ADD CONSTRAINT "Equipe_local_trabalho_id_fkey" FOREIGN KEY ("local_trabalho_id") REFERENCES "public"."LocalTrabalho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MembroEquipe" ADD CONSTRAINT "MembroEquipe_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MembroEquipe" ADD CONSTRAINT "MembroEquipe_equipe_id_fkey" FOREIGN KEY ("equipe_id") REFERENCES "public"."Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RegistroImagem" ADD CONSTRAINT "RegistroImagem_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "public"."Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RegistroImagem" ADD CONSTRAINT "RegistroImagem_local_trabalho_id_fkey" FOREIGN KEY ("local_trabalho_id") REFERENCES "public"."LocalTrabalho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
