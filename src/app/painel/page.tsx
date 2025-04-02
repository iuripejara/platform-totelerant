"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SelectTimes from "@/components/selectPersona/SelectTimes";
import SelectLocal from "@/components/selectLocal/SelectLocal";
import { Target } from "lucide-react";

export default function Painel() {

    const [selectTeam,setSelectTeam] = useState("");
    const [selectLocal,setSelectLocal] = useState ("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, [router]);

    // Para saber dos times  
    const teams = [
        {label: "Iuri", value:"Iuri"},
        {label: "Felipe", value:"Felipe"},
        {label: "Lucas", value:"Lucas"},
        {label: "Gabriel", value:"Gabriel"},
        {label: "johnatan", value:"johnatan"}
    ];

    // para os locais
    const torres = [
        {label: "Porto", value:"Porto"},
        {label: "Coimbra", value:"Coimbra"},
        {label: "Lisboa", value:"Lisboa"},
        {label: "Braga", value:"Braga"},
    ];

    
    return (
        <div className="min-h-screen bg-azulBg flex flex-col items-center justify-center p-6">
            <div className="flex items-center gap-4">
                <h1 className="text-center text-2xl pt-10 text-zinc-50 font-bold mb-10 animate-out">
                    Bem-vindo ao Painel!
                </h1>
                
                <button
                    onClick={() => {
                        localStorage.removeItem("token");
                        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                        router.push("/");
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                    Sair
                </button>
            </div>

            <main className="w-full max-w-lg bg-zinc-800 p-6 rounded-md shadow-lg">
                <div className="grid gap-6">
                        <div>
                            <SelectTimes
                                name="team"
                                options={teams}
                                value={selectTeam}// passado um valor que é valido
                                onChange={(e => setSelectTeam(e.target.value))} // definido o evento onChange
                                className="
                                    w-full p-2 rounded-md bg-zinc-900 text-lg text-zinc-100
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    transition hover:shadow-md
                                "
                                
                            />
                                
                            
                        </div>

                    <SelectLocal
                        name="torre"
                        options={torres}
                        value={selectLocal}
                        onChange={(e) => setSelectLocal(e.target.value)}
                        className="
                            w-full p-2 rounded-md bg-zinc-900 text-lg text-zinc-100
                            focus:outline-none focus:ring-2 focus:ring-blue-500 
                            transition hover:shadow-md
                        "
                    />

                    {/* Botão de Início */}
                    <button 
                        className="
                            bg-blue-600 py-2 rounded-md text-zinc-100 
                            hover:bg-blue-500 font-semibold transition
                        "
                    >
                        Começar Jornada de Trabalho
                    </button>
                </div>
            </main>
        </div>
    );
}
