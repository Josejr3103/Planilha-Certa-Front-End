import { useNavigate } from "react-router-dom";

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
            <div>
                <button onClick={handleConsultorForm}>
                    Cadastro
                </button>
                <button onClick={handleConsultorList}>
                    Editar Consultor
                </button>
            </div>
        </>
    );
}

export default DashboardConsultor;
