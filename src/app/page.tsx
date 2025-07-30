import Head from "next/head";
import Login from "./login/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platform-TolerantLevel",
  description: "Platform para uso da empresa Platform-TolerantLevel"
  
}


export default function Home() {
  return (
    <>
      <Head>
        <title>Platform-TolerantLevel</title>
        <meta name="description" content="Platform para uso da empresa Platform-TolerantLevel" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <div>
        <Login/> 
      </div>
    </>
    
  );
}
