import Login from "./login/page";
import type { Metadata, Viewport } from "next"; // Importe Viewport aqui

// Defina seus metadados para a página
export const metadata: Metadata = {
  applicationName: "Platform-TolerantLevel",
  title: "Platform-TolerantLevel",
  description: "Platform para uso da empresa Platform-TolerantLevel",
  manifest: "/manifest.json", // Link para o manifest
  // Adicione meta tags específicas para iOS e outras melhorias PWA
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default', // Ou 'black-translucent' para uma barra transparente
    title: 'Platform-TolerantLevel', // Título para a tela inicial do iOS
  },
  formatDetection: {
    telephone: false, // Evita que números de telefone sejam clicáveis automaticamente
  },
  
};

// Defina o viewport para garantir que a aplicação se ajuste bem em dispositivos móveis
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1, // Evita o zoom em dispositivos móveis
  userScalable: false, // Desabilita o zoom do usuário
  viewportFit: 'cover', // Usa toda a área disponível em dispositivos com entalhes (notches)
  themeColor: '#000000', // ✅ aqui é o lugar certo
};


export default function Home() {
  return (
    <>
      
      <div>
        <Login/> 
      </div>
    </>
    
  );
}
