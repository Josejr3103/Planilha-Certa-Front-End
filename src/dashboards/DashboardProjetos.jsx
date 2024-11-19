import { useNavigate } from "react-router-dom"


function DashboardProjetos(){

    const navigate = useNavigate();

    const handleProjetosForm = () => {
        navigate("/projetos/cadastro");
    };

    const handleProjetosList = () => {
        navigate("/projetos/lista");
    };

    return(
        <>
        <div>
<button onClick={handleProjetosForm}>Cadastro</button>
<br /><br />
<button onClick={handleProjetosList}>Lista</button>

        </div>
        </>
    )
}export default DashboardProjetos;