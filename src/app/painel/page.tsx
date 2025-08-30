"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SelectTimes from "@/components/selectPersona/SelectTimes";
import SelectLocal from "@/components/selectLocal/SelectLocal";
import LocalizacaoBotao from "@/components/localizacaoBotao/LocalizacaoBotao";

export default function Painel() {
    const router = useRouter();

    // Para saber dos times  
    const teams = [
        {label: "Felipe", value:"Felipe"},
        {label: "Iuri", value:"Iuri"},
        {label: "Lucas", value:"Lucas"},
        {label: "Gabriel", value:"Gabriel"},
        {label: "johnatan", value:"johnatan"}
    ];

    const torres = [
        {label: "Porto", value:"Porto"},
        {label: "Coimbra", value:"Coimbra"},
        {label: "Lisboa", value:"Lisboa"},
        {label: "Braga", value:"Braga"},
    ];

    const [selectTeam,setSelectTeam] = useState([{id:1,value:""}])
    const [selectLocal,setSelectLocal] = useState ("");

    const newAddSelect = () => {
        setSelectTeam([...selectTeam,{id: selectTeam.length + 1 ,value:""}])
    };

    const neweChange = ( id: number, newValue: string ) => {
        setSelectTeam(selectTeam.map(select => select.id === id ? { ...select,value:newValue}: select))
    }

    const removeSelect = () =>{
        if (selectTeam.length > 1) {
            setSelectTeam(selectTeam.slice(0,-1));
        }
    }

    return (
        <div className="min-h-screen bg-azulBg flex flex-col items-center justify-center p-6">
            <div className="flex items-center gap-4">
                <h1 className="text-center text-2xl pt-10 text-zinc-50 font-bold mb-10 animate-out">
                    Bem-vindo ao Painel!
                </h1>
                
                <button
                    onClick={() => {
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
                        { selectTeam.map((select) => (
                            <SelectTimes
                                key={select.id}
                                name={`team-${select.id}`}
                                options={teams}
                                value={select.value}
                                onChange={(e)=> neweChange(select.id, e.target.value)}
                                className="
                                    w-full p-3 rounded-md bg-zinc-900 text-lg text-zinc-100
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    transition hover:shadow-md my-2
                                "  
                            />
                        ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-between gap-3">
                        <button
                            onClick={removeSelect}
                            className=" 
                                flex-1 text-lg text-zinc-50 bg-red-600 px-3 py-2 rounded-md
                                hover:bg-red-700 transition-shadow shadow-md
                            "
                        >
                            Remover um da Equipe
                        </button> 

                        <button
                            onClick={newAddSelect}
                            className=" 
                               flex-1 text-lg text-zinc-50 bg-blue-600 px-3 py-2 rounded-md
                               hover:bg-blue-700 transition-shadow shadow-md
                            "
                        >
                            Adicionar mais um a Equipe
                        </button> 
                    </div>
                    
                    <hr />

                    <SelectLocal
                        name="torre"
                        options={torres}
                        value={selectLocal}
                        onChange={(e) => setSelectLocal(e.target.value)}
                        className="
                            w-full p-3 rounded-md bg-zinc-900 text-lg text-zinc-100
                            focus:outline-none focus:ring-2 focus:ring-blue-500 
                            transition hover:shadow-md
                        "
                    />
                    <LocalizacaoBotao/>
                </div>
            </main>
        </div>
    );
}
