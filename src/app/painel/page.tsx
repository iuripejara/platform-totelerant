"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Painel() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/");
        }
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center  ">
            <h1 className="text-4xl font-bold">Bem-vindo ao Painel!</h1>
            <button
                onClick={() => {
                    localStorage.removeItem("token");
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    router.push("/");
                }}
                className=" ml-2 px-4 py-2 bg-red-500 text-white rounded"
            >
                Sair
            </button>
        </div>
    );
}
