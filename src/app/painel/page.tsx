"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Painel() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, []);

    return (
        <div className="min-h-screen bg-azulBg flex flex-col items-center justify-center p-6">
            <h1 className="text-center text-2xl pt-10 text-zinc-50 font-bold mb-6 animate-out ">Bem-vindo ao Painel!</h1>
            
            {/* <button
                onClick={() => {
                    localStorage.removeItem("token");
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    router.push("/");
                }}
                className=" ml-2 px-2 py-1 bg-red-500 text-white rounded"
            >
                Sair
            </button> */}
            <main className="w-full max-w-lg bg-zinc-800 p-6 rounded-md shadow-lg ">

                <div className="grid gap-6">
                    <div>
                        <form action="">
                            <select name="time" 
                                className="
                                    w-full p-2 rounded-md bg-zinc-900 text-lg text-zinc-100
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    transition hover:shadow-md
                                "
                            >
                                <option value="#" disabled selected>Escolha a sua quipe</option>
                                <option value="Iuri">Iuri</option>
                                <option value="Lucas">Lucas</option>
                                <option value="Felipe">Felipe</option>
                                <option value="Gabriel">Gabriel</option>
                            </select>
                        </form>
                    </div>
                    
                        <form action="">
                        <select name="torre" 
                                className="
                                    w-full p-2 rounded-md bg-zinc-900 text-lg text-zinc-100
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    transition hover:shadow-md
                                "
                            >
                                <option value="#" disabled selected> Local de trabalho</option>
                                <option value="Porto">Porto</option>
                                <option value="Lisboa">Lisboa</option>
                                <option value="Coimbra">Coimbra</option>
                                <option value="Braga">Braga</option>
                            </select>
                        </form>
                        <button 
                            className="
                                bg-blue-600 py-2 rounded-md text-zinc-100 
                                hover:bg-blue-500 font-semibold
                            "
                        >
                            Comecar Jornada de trabalho
                        </button>
                </div>
            </main>
        </div>
    );
}
