import { useNavigate } from "react-router-dom";
import clientes from '../assets/clientes.png'
function DashboardPrincipal() {
    const navigate = useNavigate();
    const handleDashboardCliente = () => {

        navigate("/dashboard/clientes");
    };
    return (
        <>
         <div className="container">
           
            <div class="card">
      <div onClick={handleDashboardCliente}class="bg"> <img  className="fotografia" src={clientes} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>



            </div>

        </>
    )
} export default DashboardPrincipal;