import { useNavigate } from "react-router-dom";
import "../estilos/DashboardClientes.css"
import cadastrop from '../assets/cadastro.png'
import listap from '../assets/lista.png'
function DashboardClientes() {
  const navigate = useNavigate();


  const handleCadastroClick = () => {
    navigate("/clientes/cadastro");
  };


  const handleListaClick = () => {
    navigate("/clientes/lista");
  };

  return (
    <>
      <div className="container">
      <div class="card">
      <div onClick={handleCadastroClick} class="bg"> <img  className="fotografia" src={cadastrop} alt="Cadastro de Clientes" srcset="" /></div>
    <div class="blob"></div>
</div>
      
<div class="card">
      <div onClick={handleListaClick} class="bg"> <img src={listap} className="fotografia" alt="Lista de clientes" /></div>
    <div class="blob"></div>
</div>

     
      </div>
    </>
  );
}

export default DashboardClientes;
