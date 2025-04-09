"use client";
import Image from "next/image";
import { Aldrich } from "next/font/google";
import { useState } from "react";

const aldrich = Aldrich ({
    weight: "400",
    subsets: ["latin"]
})




export default function NavBar() {
    const [lateralNave,setLateralNave] = useState(false)
    const clicNave = () => {
        setLateralNave(!lateralNave)
    }
    return(
        <>
            <nav className="
                flex justify-between items-center py-9 px-8
                md:justify-around
            ">
                <button>
                    <Image 
                        src="ambuger.svg" 
                        alt="menul ambuger" 
                        width={25} height={21}
                        onClick={clicNave}
                    />
                </button>
                { lateralNave && (
                    <div className="
                            fixed left-0 top-0 h-full w-80 pt-1 bg-zinc-800 shadow-lg
                            transition-transform duration-150
                        ">
                        <div className="flex justify-between">
                            <h1 className="
                                text-xl text-zinc-100 ml-5 my-9
                            
                            ">
                                Menu
                            </h1>
                            <button 
                                className="text-zinc-100 mr-5 text-2xl"
                                onClick={clicNave}
                            >
                                X
                            </button>
                        </div>
                        
                        <hr />
                    </div>
                )

                }
                <h1 className={` text-2xl text-zinc-50 ${aldrich.className}`}>Perfil do adm</h1>
                <button>
                    <Image src="luaBranca.svg" alt="menul ambuger" width={32} height={32} />
                </button>
            </nav>
        </>
    )
}