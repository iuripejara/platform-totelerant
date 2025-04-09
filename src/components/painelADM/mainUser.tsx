import Image from "next/image";
import { Aldrich, Nunito } from "next/font/google";

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: "600",
  subsets: ["latin"],
});

export default function MainUser() {
    return(
        <>
            <main className="mt-5 px-4 sm:px-8">
            <h1
            className={`text-xl text-zinc-50 mb-3 ml-4 sm:ml-10 md:text-2xl md:ml-[270px] ${aldrich.className}`}
            >
            Usuários
            </h1>

            <div className="max-w-4xl mx-auto rounded-lg mt-6 py-5 bg-zinc-800 text-zinc-100">
            {/* input e botão */}
            <div className="flex flex-wrap justify-center gap-3 px-4">
                <input
                type="text"
                placeholder="Usuários"
                className="w-full sm:w-64 md:w-3/4 bg-zinc-900 rounded-lg text-zinc-50 pl-2 py-2"
                />

                <button className="bg-zinc-900 py-2 px-4 rounded-lg hover:bg-zinc-950 transition-colors duration-150 shadow-md hover:border">
                <Image
                    src="addnovoUser.svg"
                    alt="adicionar novo user"
                    width={25}
                    height={20}
                />
                </button>
            </div>

            {/* grid dos cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4">
                {[
                    { nome: "Iuri", username: "Iuri0909", senha: "Iuriteste" }, 
                    { nome: "Felipe", username: "Felipe0909", senha: "545454" },
                    { nome: "lucas", username: "lucas112", senha:"56565"}].map((user, i) => (
                <div
                    key={i}
                    className={`w-full max-w-sm mx-auto rounded-lg py-5 bg-azulBg text-zinc-100 ${nunito.className}`}
                >
                    <h1 className="text-center text-sm">{user.nome}</h1>

                    <div className="flex gap-4 ml-5 my-4">
                    <label htmlFor="Username">Username:</label>
                    <p className="border-b w-1/2">{user.username}</p>
                    </div>

                    <div className="flex gap-4 ml-5 my-4">
                    <label htmlFor="Password">Password:</label>
                    <p className="border-b w-1/2">{user.senha}</p>
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