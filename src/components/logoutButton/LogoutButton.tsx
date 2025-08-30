
import { useRouter } from "next/navigation";
import { ReactNode } from "react"

interface LogoutButtonProps {
    className: string
    children?:ReactNode
    onLogout?: () => void;
}

export default function LogoutButton ({className,children,onLogout}:LogoutButtonProps ){

    const router = useRouter()

    async function hanleLogout() {
        await fetch ("/api/logout", { method: "POST" })
        onLogout?.(); // fecha menu se passado
        router.push("/")//volta para login
    }

    return(
    <>
        <button
            onClick={hanleLogout}
            className={className}
        >
        {children}
        </button>
    </>
    )
}