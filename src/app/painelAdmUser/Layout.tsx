'use client'
import React from "react";
import Image from "next/image";
import { Aldrich,Nunito} from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/logoutButton/LogoutButton";



const aldrich = Aldrich ({
    weight: "400",
    subsets: ["latin"]
})
const nunito = Nunito ({
    weight: "600",
    subsets: ["latin"]
})

interface layoutPainel {
    children: React.ReactNode,
    className:string,
}

export default function Layout({children,className}:layoutPainel) {

    const [lateralNave,setLateralNave] = useState(false)
    const clicNave = () => {
        setLateralNave(!lateralNave)
    }

    return(
        <div className={className}>
            <nav className={`
                    flex justify-between items-center py-9 px-8
                    md:justify-around ${nunito.className}
                `}
            >
                <button>
                    <Image 
                        src="/ambuger.svg" 
                        alt="menul ambuger" 
                        width={25} height={21}
                        onClick={clicNave}
                    />
                </button>
                { lateralNave && (
                    <div className="
                            fixed left-0 top-0 h-full w-80 pt-[3.4px] bg-gray-800 shadow-lg
                            transition-transform duration-150 text-zinc-100 
                        ">
                        <div className="flex justify-between">
                            <h1 className="
                                text-xl ml-5 my-9
                            
                            ">
                                Menu
                            </h1>
                            <button 
                                className="mr-5 text-2xl"
                                onClick={clicNave}
                            >
                                X
                            </button>
                        </div>
                        
                        <hr />

                        <h1 className=" text-xl ml-5 my-5">Gereciamento</h1>

                        <ul className="space-y-6" >
                            <li className="flex items-center gap-2 ml-5">
                                <Image
                                    src="/Perfil.svg"
                                    alt="perfil"
                                    width={25}
                                    height={25}
                                    className="ml-8"
                                /> 
                                <Link href="/painelAdmUser"  >Perfil</Link>
                            </li>
                           
                            <li className="flex gap-4">
                                <Image
                                    src="/Localizacao.svg"
                                    alt="perfil"
                                    width={25}
                                    height={25}
                                    className="ml-8"
                                /> 
                                <Link href="/painelAdmUser/painelAdmLocation"  >Localização</Link>
                            </li>
                            <li className="flex gap-4">
                                <Image
                                    src="/ferramenta.svg"
                                    alt="perfil"
                                    width={25}
                                    height={25}
                                    className="ml-8"
                                /> 
                                <Link href="#"  >Trabalhos</Link>
                            </li>
                            <LogoutButton 
                                className="flex items-center gap-2 ml-5"
                                onLogout={() => setLateralNave(false)}
                            >
                                <Image
                                    src="/deligar.svg"
                                    alt="perfil"
                                    width={25}
                                    height={25}
                                    className="ml-5"
                                />
                                <span className="text-red-600 text-lg">Sair</span>
                            </LogoutButton>
                           
                        </ul>
                                           
                    </div>
                )

                }
                <h1 className={` text-2xl text-zinc-50 ${aldrich.className}`}>Perfil do adm</h1>
                <button>
                    <Image src="/luaBranca.svg" alt="menul ambuger" width={32} height={32} />
                </button>
            </nav>
            <main>{children}</main>
        </div>
    )
}