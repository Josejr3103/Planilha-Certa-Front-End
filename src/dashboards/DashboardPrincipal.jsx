import { useNavigate } from "react-router-dom";
import clientes from '../assets/clientes.png'
import consultor from '../assets/Consultor.png'
import relatorio from '../assets/relatorio.png'
import contrato from '../assets/cosmetics.png'
import etapas from '../assets/etapasr.png'
function DashboardPrincipal() {




    const navigate = useNavigate();
    const handleDashboardCliente = () => {

        navigate("/dashboard/clientes");
    };

    const handleDashboardConsultor= () => {
        navigate("/dashboard/consultor");
    }
     const handleDashboardContrato=()=>{
        navigate("/contrato/cadastro")
     }
     const handleDashboardProjetos=()=>{
        navigate("/dashboard/projetos")
     }
     const handleDashboardEtapas=()=>{
        navigate("/dashboard/etapas")
     }
     const handleDashboardRelatorio=()=>{
        navigate("/relatorio/lista")
     }
 
     const handleEtapasList = () => {
        navigate("/etapas/lista");
    };




    return (
        <>
         <div className="container">
           
            <div class="card">
      <div onClick={handleDashboardCliente}class="bg"> <img  className="fotografia" src={clientes} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div> 




<div class="card">
      <div onClick={handleDashboardConsultor}class="bg"> <img  className="fotografia" src={consultor} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>

<div class="card">
      <div onClick={handleDashboardContrato}class="bg"> <img  className="fotografia" src={contrato} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>

<div class="card">
      <div onClick={handleEtapasList}class="bg"> <img  className="fotografia" src={etapas} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>

<div class="card">
      <div onClick={handleDashboardRelatorio}class="bg"> <img  className="fotografia" src={relatorio} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>



            </div>

        </>
    )
} export default DashboardPrincipal;