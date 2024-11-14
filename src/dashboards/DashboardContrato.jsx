import { useNavigate } from "react-router-dom"


function DashboardContrato(){

    const navigate = useNavigate();

    const handleContratoForm = () => {
        navigate("/contrato/cadastro");
    };

    const handleContratoList = () => {
        navigate("/contrato/lista");
    };

    return(
        <>
        <div>
<button onClick={handleContratoForm}>Cadastro</button>
<br /><br />
<button onClick={handleContratoList}>Lista</button>

        </div>
        </>
    )
}export default DashboardContrato;