import Image from "next/image";
import { Aldrich } from "next/font/google";

const aldrich = Aldrich ({
    weight: "400",
    subsets: ["latin"]
})
export default function NavBar() {
    return(
        <>
            <nav className="
                flex justify-between items-center py-9 px-8
                md:justify-around
            ">
                <button>
                    <Image src="ambuger.svg" alt="menul ambuger" width={25} height={21} />
                </button>
                <h1 className={` text-2xl text-zinc-50 ${aldrich.className}`}>Perfil do adm</h1>
                <button>
                    <Image src="luaBranca.svg" alt="menul ambuger" width={32} height={32} />
                </button>
            </nav>
        </>
    )
}