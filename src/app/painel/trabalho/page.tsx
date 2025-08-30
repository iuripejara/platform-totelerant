"use client";
import { useState } from "react";

export default function Trabalho() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [linhaVida, setLinhaVida] = useState(false);
  const [fotos, setFotos] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("linhaVida", linhaVida ? "true" : "false");

    if (fotos) {
      for (let i = 0; i < fotos.length; i++) {
        formData.append("fotos", fotos[i]); // manda todas as fotos
      }
    }

    const res = await fetch("/api/localtrabalho", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log("Salvo no banco:", data);
  };

  return (
    <div className=" bg-azulBg  h-screen flex items-center justify-center">
      <div className="bg-gray-800 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Formulário de Trabalho
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome da torre */}
          <div>
            <label className="block text-white mb-1">Nome da Torre</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
              placeholder="Ex: Torre A"
            />
          </div>

          {/* Fotos */}
          <div>
            <label className="block text-white mb-1">Fotos da Torre</label>
            <input
              type="file"
              onChange={(e) => setFotos(e.target.files)}
              className="w-full text-white file:mr-4 file:py-2 file:px-4 
                        file:rounded-full file:border-0 file:text-sm 
                        file:font-semibold file:bg-blue-600 file:text-white
                        hover:file:bg-blue-500"
              multiple
            />
          </div>

          {/* Linha de vida */}
          <div className="flex items-center gap-2">
             <input
              type="checkbox"
              id="linhaVida"
              checked={linhaVida}
              onChange={(e) => setLinhaVida(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="linhaVida" className="text-white">
              Torre tem linha de vida
            </label>
          </div>

          {/* Observações */}
          <div>
            <label className="block text-white mb-1">Observações</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full p-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
              rows={4}
              placeholder="Digite observações aqui..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl transition-all"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
