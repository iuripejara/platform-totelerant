"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SelectTimes from "@/components/selectPersona/SelectTimes";
import SelectLocal from "@/components/selectLocal/SelectLocal";
import LocalizacaoBotao from "@/components/localizacaoBotao/LocalizacaoBotao";
import { Value } from "@radix-ui/react-select";

export default function Painel() {

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, [router]);

    

    // Para saber dos times  
    const teams = [
        {label: "Felipe", value:"Felipe"},
        {label: "Iuri", value:"Iuri"},
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

    //estado
    const [selectTeam,setSelectTeam] = useState([{id:1,value:""}])
    const [selectLocal,setSelectLocal] = useState ("");

    //adicionar novo select de times
    const newAddSelect = () => {
        setSelectTeam([...selectTeam,{id: selectTeam.length + 1 ,value:""}])
    };

    //pegado valor de um select  especifico
    const neweChange = ( id: number, newValue: string ) => {
        setSelectTeam(selectTeam.map(select => select.id === id ? { ...select,value:newValue}: select))
    }
    
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
                    <div className="flex justify-end ">

                        <button
                            onClick={newAddSelect}
                            className=" 
                                text-2xl text-zinc-50
                                bg-blue-500 pb-1 px-2 rounded-[4px]
                            "
                        >
                            +
                        </button> 
                    </div>
                    <div>  
                        {/* Múltiplos selects de times */}
                        { selectTeam.map((select) => (
                            <SelectTimes
                                key={select.id}
                                name={`team-${select.id}`}
                                options={teams}
                                value={select.value}// passado um valor que é valido
                                onChange={(e)=> neweChange(select.id, e.target.value)} // definido o evento onChange
                                className="
                                    w-full p-2 rounded-md bg-zinc-900 text-lg text-zinc-100
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                                    transition hover:shadow-md my-1
                                "  
                            />
                            
                        ))}
                    </div>
                    
                    <hr />

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
                    <LocalizacaoBotao/>
                </div>
            </main>
        </div>
    );
}
