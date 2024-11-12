import { useNavigate } from "react-router-dom";
import clientes from '../assets/clientes.png'
import consultor from '../assets/Consultor.png'
function DashboardPrincipal() {




    const navigate = useNavigate();
    const handleDashboardCliente = () => {

        navigate("/dashboard/clientes");
    };

    const handleDashboardConsultor= () => {
        navigate("/dashboard/consultor");
    }

 




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



            </div>

        </>
    )
} export default DashboardPrincipal;