import { useNavigate } from "react-router-dom"


function DashboardRelatorio(){

    const navigate = useNavigate();

 

    const handleRelatorioList = () => {
        navigate("/relatorio/lista");
    };

    return(
        <>
        <div>

<br /><br />
<button onClick={handleRelatorioList}>Lista</button>

        </div>
        </>
    )
}export default DashboardRelatorio;