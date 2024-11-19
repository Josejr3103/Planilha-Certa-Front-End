import { useNavigate } from "react-router-dom"


function DashboardEtapas(){

    const navigate = useNavigate();

    const handleEtapasForm = () => {
        navigate("/etapas/cadastro");
    };

    const handleEtapasList = () => {
        navigate("/etapas/lista");
    };

    return(
        <>
        <div>
<button onClick={handleEtapasForm}>Cadastro</button>
<br /><br />
<button onClick={handleEtapasList}>Lista</button>

        </div>
        </>
    )
}export default DashboardEtapas;