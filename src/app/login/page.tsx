"use client"
import {Aldrich} from "next/font/google"
import FormularioLogin from "../../components/formularioLogin/page"
//
const aldrich = Aldrich ({
    weight:"400",
    subsets: ["latin"],
})

export default function Login() {

    return(
        <div className="relative h-screen bg-bg-img bg-cover bg-center">
            <div className="absolute bottom-0 flex items-center justify-center md:bottom-60 md:w-1/2 left-1/2 transform -translate-x-1/2 ">
                <div 
                    className="
                        bg-azulBg  rounded-t-2xl w-screen
                        shadow-lg p-9 text-zinc-100
                        md:rounded-md
                        "
                    >
                    <header className={`text-center text-3xl font-bold mb-6 ${aldrich.className}`}>TolerantLevel</header>
                    <div>
                        <FormularioLogin/>
                        <footer className=" text-center text-[11px] md:text-[15px] mt-6 flex justify-between">
                            <span>©Todos os direitos reservado.TolerantLevel 2025</span>
                            <span><a href="https://github.com/iuripejara">PrestesDev</a></span>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}