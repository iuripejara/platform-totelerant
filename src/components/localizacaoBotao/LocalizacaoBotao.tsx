"use client"

import { useState } from "react"

export default function LocalizacaoBotao () {
    const [ dados, setDados ] = useState<{latitude?:number; longitude?:number; horario?:string}>({});

    //pegando a localização do utlizador
    const pegarLocalizaçao =()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) =>{
                    const latitude = pos.coords.latitude;
                    const longitude = pos.coords.longitude;
                    const horario = new Date().toLocaleString();

                    setDados({latitude,longitude,horario});

                },
                (erro)=>{
                    console.log("Erro ao obter localização:",erro.message)
                },
            );
        }else{
            console.error("Geolocalização não suportada pelo navegador.")
        }
    };

    return(
        <>
            <button
                className="
                    bg-blue-600 py-2 rounded-md text-zinc-100 
                    hover:bg-blue-500 font-semibold transition
                "
                onClick={pegarLocalizaçao}
            >
                Começar Jornada de Trabalho
            </button>
            {dados.latitude && (
                <div className=" bg-blue-600 py-2 rounded-md text-zinc-100 
                            hover:bg-blue-500 font-semibold transition">
                    <p>📍 Localização: {dados.latitude},{dados.longitude}</p>
                    <p>⏰ Horário: {dados.horario}</p>
                </div>
            )}
        </>
    );
}