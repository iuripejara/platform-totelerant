import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({ message : "Lougout realizado com sucesso"})

    //remove o cookie
    response.cookies.set("token","",{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        expires: new Date(0), // expira no passado
        path:"/"
    })
    return response

}