import { useState } from "react";

interface BotaoAleatorio{
    className:  string,

}

export default function GeradorDeSenhas({className}:BotaoAleatorio) {


    

    return(
        <>
            <button className={className}>
                Gerar senha  aleatório
            </button>
        </>
    )
}