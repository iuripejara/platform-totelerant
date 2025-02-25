"use client"
import {Aldrich} from "next/font/google"

const aldrich = Aldrich ({
    weight:"400",
    subsets: ["latin"],
})


import FormularioLogin from "../formularioLogin/page"

export default function Login() {
    return(
        <div className="relative h-screen bg-bg-img bg-cover bg-center">
            <div className="absolute bottom-0 flex items-center justify-center   ">
                <div 
                    className="
                        bg-azulBg  rounded-t-2xl w-screen
                        shadow-lg p-9 text-zinc-100
                        "
                    >
                    <header className={`text-center text-3xl font-bold mb-6 ${aldrich.className}`}>Tolerantlevel</header>
                    <div>
                        <FormularioLogin/>
                        <footer className=" text-center text-[11px] mt-6 flex justify-between">
                            <span>©Todos os direitos reservado.Tolerantlevel 2025</span>
                            <span><a href="https://github.com/iuripejara">PrestesDev</a></span>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}