import { useNavigate } from "react-router-dom";
import Criação from '../assets/CriaçãoConsultor.png';
import edição from '../assets/ediçãoConsultor.png';
function DashboardConsultor() {

    const navigate = useNavigate();

    const handleConsultorForm = () => {
        navigate("/consultor/cadastro");
    };

    const handleConsultorList = () => {
        navigate("/consultor/lista");
    };

    return (
        <>
            <div className="container">
                      
                      
      <div class="card">
      <div onClick={handleConsultorForm} class="bg"> <img  className="fotografia" src={Criação} alt="Cadastro de Consultor" srcset="" /></div>
    <div class="blob"></div>
</div>

<div class="card">
      <div onClick={handleConsultorList} class="bg"> <img  className="fotografia" src={edição} alt="Cadastro de Consultor" srcset="" /></div>
    <div class="blob"></div>
</div>

              
                
            </div>
        </>
    );
}

export default DashboardConsultor;
