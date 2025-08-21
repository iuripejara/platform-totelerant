"use client"
import Image from "next/image";
import { Aldrich, Nunito } from "next/font/google";
import MyPopupUser from "./myPopupUser";
import { useEffect, useState } from "react";


const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
});

type Usuario = {
    id: number;
    nome: string;
    username: string;
    senha: string;
    email: string;
}

export default function MainUser() {

    const [ usuario, setUsuario ] =  useState<Usuario[]>([]);

     useEffect(()=> {
            fetch("/api/vewUser")
            .then((res) => res.json())
            .then((data) => setUsuario(data));
        },[]);

    return(
        <>
            <main className="mt-5 px-4 sm:px-8">
                <h1
                className={`text-xl text-zinc-50 mb-3 ml-4 sm:ml-10 md:text-2xl md:ml-[270px] ${aldrich.className}`}
                >
                Usuários
                </h1>

                <div className="max-w-[82rem] mx-auto rounded-lg mt-6 py-5 bg-gray-800 text-zinc-100">
                {/* input e botão */}
                <div className="flex flex-wrap justify-center gap-3 px-4">
                    <input
                        type="text"
                        placeholder="Usuários"
                        className="w-64  md:w-3/4 bg-zinc-900 rounded-lg text-zinc-50 pl-2 py-2"
                    />

                    <MyPopupUser 
                        imageSrc="/Avatar.svg"
                        imageAlt="adicionar novo user"
                        imageWidth={25}
                        imageHeight={25}
                    />

                </div>

                {/* grid dos cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
                    {usuario.map((Usuario)=>(
                        <div
                            key={Usuario.id}
                            className={`w-full max-w-sm mx-auto rounded-lg py-5 bg-azulBg text-zinc-100 ${nunito.className}`}
                        >
                        <h1 className="text-center text-sm uppercase">{Usuario.nome}</h1>

                        <div className="flex gap-4 ml-5 my-4">
                            <label htmlFor="Username">Username:</label>
                            <p className="border-b w-1/2 uppercase">{Usuario.username}</p>
                        </div>

                        <div className="flex gap-4 ml-5 my-4">
                            <label htmlFor="Password">Password:</label>
                            <p className="border-b w-1/2">{Usuario.senha}</p>
                        </div>

                        <div className="flex justify-center space-x-2 pt-3">
                        <button>
                            <Image
                            src="USER-EDIT.svg"
                            alt="editar usuário"
                            width={25}
                            height={25}
                            />
                        </button>
                        <button>
                            <Image
                            src="USER-REMOVE.svg"
                            alt="remover usuário"
                            width={25}
                            height={20}
                            />
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
                
            </main>
        </>
    )
}