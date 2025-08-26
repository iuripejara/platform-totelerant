"use client";
import { Inria_Serif } from "next/font/google";
import { useRouter } from "next/navigation"; // ✅ App Router
import { useState } from "react";

const inria_Serif = Inria_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function FormularioLogin() {
  const [erro, setErro] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [chickSenha, setChickSenha] = useState(false);
  const router = useRouter(); // ✅ useRouter correto para App Router

  const versenha = () => {
    setChickSenha(!chickSenha);
  };

  const entrarLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setErro(data.message || "Erro ao logar");
        return;
      }

      if (data.token) {
        const payload = JSON.parse(atob(data.token.split(".")[1]));
        if (payload.tipo_usuario === "ADMIN") {
          router.push("/painelAdmUser");
        } else {
          router.push("/painel");
        }
      }
    } catch (error) {
      alert("Erro ao fazer login. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={entrarLogin}>
      <section className={`space-y-6 ${inria_Serif.className}`}>
        <div className="relative">
          <label htmlFor="Username">Username: </label>
          {erro && <p className="text-red-500">{erro}</p>}
          <input
            type="text"
            id="Username"
            name="Username"
            value={username}
            className="w-full p-1 bg-transparent border-b border-zinc-700"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <p className="absolute right-2 top-6">
            <img src="Avatar.svg" alt="icone" />
          </p>
        </div>

        <div>
          <label htmlFor="Password">Password: </label>
          <input
            type={chickSenha ? "text" : "password"}
            id="Password"
            name="Password"
            value={password}
            className="w-full p-1 bg-transparent border-b border-zinc-700"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={versenha}
            className="absolute right-11 text-slate-50"
          >
            {chickSenha ? (
              <img src="olho-2.svg" alt="olho para ver a senha" className="mt-2" />
            ) : (
              <img src="olho1.svg" alt="olho para ver a senha" />
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-zinc-100 font-bold py-3 rounded-md"
        >
          Login
        </button>
      </section>
    </form>
  );
}
