'use client'

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

interface imagebotao{
  imageSrc: string,
  imageAlt: string,
  imageWidth:number,
  imageHeight:number,
}

export default function MyPopupLocation({imageSrc,imageAlt,imageWidth,imageHeight }:imagebotao) {
  return (
    <Dialog.Root >
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
        <Dialog.Content className="fixed top-[27%] left-1/2 bg-gray-800 py-6 rounded shadow transform -translate-x-1/2 -translate-y-1 text-zinc-50 w-[92%]  h-auto ">
          <Dialog.Title className="text-lg font-bold pb-5 pl-5">Adicionar novo usuário</Dialog.Title>
          <hr />
          <div className="bg-azulBg w-80 h-full mx-auto mt-10 py-10 rounded-md ">
            <div className=" flex flex-col items-center space-y-5 ">
              
              <input type="text" id="Coodernada" placeholder="Coodernada" className="bg-azulBg w-72  py-2 pl-3 rounded-md border border-zinc-50 shadow-md" />
              <input type="text" id="Regiao" placeholder="Regiao" className="bg-azulBg w-72  py-2 pl-3 rounded-md border border-zinc-50 shadow-md" />

            </div>
            <div className="flex justify-center items-center mt-5"> 
              <button className=" bg-blue-500 w-72 py-1 px-2 rounded-md">
                Adicionar Nova Localização
              </button>
            </div>
          </div>
          <Dialog.Close 
            
            className="absolute top-2 right-4 mt-5"
           
            >
              X
            </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
