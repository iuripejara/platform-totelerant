import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import {Inria_Serif} from "next/font/google"
import { useState } from "react"

const inria_Serif = Inria_Serif({
    weight:"400",
    subsets: ["latin"],
})

export default function FormularioLogin() {

    const [chickSenha,setChickSenha] = useState(false)
    
    const versenha = ()=>{
        setChickSenha(!chickSenha)
    } 

    return(
        <form action="">
            <section className={` space-y-6 ${inria_Serif.className}`}>
                <div className="relative">
                    <label htmlFor="Username">Username: </label>
                    <input 
                        type="text"
                        id="Username"
                        name="Username"
                        className="w-full p-1 bg-transparent border-b border-zinc-700"
                        required
                    />
                    
                    <p className="absolute right-2 top-6">
                        <img src="Avatar.svg" alt="icone" />
                    </p>
                    
                </div>
                <div>
                    <label htmlFor="Password">Password: </label>
                    <input
                        type={chickSenha ? "text" : "password"}
                        id="Password"
                        name="Password"
                        className="w-full p-1 bg-transparent border-b border-zinc-700"
                        required
                    /> 
                    <button
                        type="button"
                        onClick={versenha}
                        className="absolute right-14 text-slate-50"
                    >
                        {chickSenha ?(
                            <img src="olho2.svg" alt="olho para ver a senha"  />
                            )  : (
                            <img src="olho1.svg" alt="olho para ver a senha"/>
                        )}
                    </button>
                    
                </div>
                <button 
                    type="button"
                        className=" w-full bg-blue-600 text-zinc-100 font-bold py-3 roud "
                        onClick={()=> alert("Lucas para de ser gay mano")}
                >
                    Login
                </button>
            </section>
        </form>
    )
}