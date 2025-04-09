import MainUser from "@/components/painelADM/mainUser";
import NavBar from "@/components/painelADM/navBar";


export default function PainelAdm() {
  return (
    <div className="bg-azulBg min-h-screen">
      <NavBar />
      <hr />
      <MainUser />
    </div>
  );
}
