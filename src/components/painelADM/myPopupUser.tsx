'use client'

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface imagebotaoProps{
  imageSrc: string,
  imageAlt: string,
  imageWidth:number,
  imageHeight:number,
  onCreated?: (user: any) => void;
}

export default function MyPopupUser({imageSrc,imageAlt,imageWidth,imageHeight,onCreated }:imagebotaoProps) {
  
  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [senha,setSenha] = useState("")
  const [open,setopen] = useState(false);


  //subimit formulario 
  async function handleSubmit() {
    
    const res = await fetch("/api/vewUser",{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome : username,
        senha,
        username,
        email,
      }),
    })
    if (res.ok) {
      const novo = await res.json();
      onCreated?.(novo); // atualiza a lista se o pai passar o callback
      setUsername("");
      setSenha("");
      setEmail("");
      setopen(false); // fecha o dialog
    }
  }



  return (
    <Dialog.Root open={open} onOpenChange={setopen}>
      <Dialog.Trigger className="px-4 py-2 bg-blue-500 text-white rounded">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="flex justify-center items-center mt-1"
        />
      </Dialog.Trigger>
        <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-[27%] md:top-[19%] left-1/2 bg-gray-800 py-7 rounded shadow transform -translate-x-1/2 -translate-y-1 text-zinc-50 w-[92%] md:w-[82rem]  h-auto ">
          <Dialog.Title className="text-lg font-bold pb-5 pl-5">Adicionar novo usuário</Dialog.Title>
          <hr />
          <div className="bg-azulBg w-80 md:w-3/5 h-full mx-auto mt-10 py-10 rounded-md ">
            <div className=" flex flex-col items-center space-y-5 ">
              <input 
                type="email"
                id="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  bg-azulBg w-72 md:w-3/5  py-2 pl-3 rounded-md border
                  border-zinc-50 shadow-md
                " 
              />
              <input 
                type="text"
                id="Username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="
                  bg-azulBg w-72 md:w-3/5  py-2 pl-3 rounded-md border
                  border-zinc-50 shadow-md
                " 
              />
              <input 
                type="password"
                id="Passoword"
                placeholder="Passoword"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="
                  bg-azulBg w-72 md:w-3/5  py-2 pl-3 rounded-md border
                  border-zinc-50 shadow-md
                " 
              />
            </div>
            <div className="flex justify-center items-center gap-3 text-sm mt-5">
                <button
                  className="
                    bg-zinc-50 py-1 px-2 md:py-2  md:px-14 text-zinc-950 rounded-md
                    "
                  >
                    Gerar senha  aleatório
                </button>
                  
                <button
                  onClick={handleSubmit}
                  className="
                    bg-blue-500 py-1 px-2 md:py-2  md:px-14 rounded-md
                  "
                >
                    Adicionar Usuario
                </button>
            </div>
          </div>
          <Dialog.Close 
            
            className="absolute top-2 right-4 mt-5 md:right-10 md:text-xl"
           
            >
              X
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
