import NavBar from "@/components/painelADM/navBar";
import Image from "next/image";

import { Aldrich,Nunito } from "next/font/google";

const aldrich = Aldrich ({
    weight: "400",
    subsets: ["latin"]
})
const nunito = Nunito({
    weight: "600",
    subsets:["latin"],
})

export default function painelAdm() {
    return(
        <div className="bg-azulBg">
            <NavBar/>
            <main className="mt-5">
                <h1 className={`text-xl text-zinc-50 mb-3 ml-8 ${aldrich.className}`} >Usuários</h1>
                    <div className="flex-col bg-zinc-800 w-[323px] mx-auto rounded-md h-full" >
                        <div className="
                                py-8 flex justify-center 
                                gap-3 
                            ">

                            <input 
                                type="text"
                                placeholder="Usuários"
                                className="
                                    w-56 bg-zinc-900 rounded-lg text-zinc-50 pl-2
                                "/>
                            
                            <button className="
                                bg-zinc-900 py-2 px-4 rounded-lg
                                hover:bg-zinc-950 transition-colors duration-150
                                shadow-md hover:border 
                                ">
                                <Image 
                                    src="addnovoUser.svg" 
                                    alt="adicionar novo user" 
                                    width={25} height={20}
                                    
                                />
                            </button>
                            
                        </div>
                        
                        <div className="
                            mx-auto w-[291px] rounded-lg mt-6 py-5 
                            bg-azulBg text-zinc-100
                        ">
                            <h1 className={`text-center text-sm ${nunito.className}`}>Iuri</h1>
                            <div className="flex gap-4 ml-5 my-4">
                                <label htmlFor="Username">Username:</label>
                                <p className="border-b w-1/2">Iuri0909</p>
                            </div>
                            <div className="flex gap-4 ml-5 my-4">
                                <label htmlFor="Password">Password:</label>
                                <p className="border-b w-1/2">Iuriteste</p>
                            </div>
                        </div>
                    
                    </div>
                    
                
                
            </main>
        </div>
    )
}