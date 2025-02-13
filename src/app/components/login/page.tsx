

export default function Login() {
    return(
        <div className="relative h-screen bg-bg-img bg-cover bg-center">
            <div className="absolute inset-0 flex items-center justify-center ">
                <div className="bg-azulBg  rounded-2xl w-11/12 shadow-lg p-8 text-zinc-100 ">
                    <header className="text-center text-3xl font-bold mb-6">Tolerantlevel</header>
                    <div>
                    <form action="">
                        <section className=" space-y-6">
                            <div className="relative">
                                <label htmlFor="Username">Username: </label>
                                <input 
                                    type="text"
                                    id="Username"
                                    name="Username"
                                    className="w-full p-1 bg-transparent border-b border-zinc-700"
                                /> 
                            </div>
                            <div>
                                <label htmlFor="Password">Password: </label>
                                <input 
                                    type="text"
                                    id="Password"
                                    name="Password"
                                    className="w-full p-1 bg-transparent border-b border-zinc-700"
                                /> 
                            </div>
                            <button 
                                type="button"
                                className=" w-full bg-blue-600 text-zinc-100 font-bold py-3 roud "
                            >
                                Login
                            </button>
                        </section>
                    </form>
                    <footer className=" text-center text-[11px] mt-6 flex justify-between">
                        <span>©Todos os direitos reservado.Totelerant 2025</span>
                        <span><a href="https://github.com/iuripejara">PrestesDev</a></span>
                    </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}