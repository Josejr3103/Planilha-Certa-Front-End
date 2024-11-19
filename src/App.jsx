import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import Navbar from './components/Navbar';
import DashboardClientes from './dashboards/DashboardClientes';
import DashboardPrincipal from './dashboards/DashboardPrincipal';
import ConsultorForm from './components/ConsultorForm';
import ConsultorList from './components/ConsultorList';
import DashboardConsultor from './dashboards/DashboardConsultor';
import ContratoList from './components/ContratoList';
import ContratoForm from './components/ContratoForm';
import DashboardContrato from './dashboards/DashboardContrato';
import ProjetosForm from './components/ProjetosForm';
import ProjetosList from './components/ProjetosList';
import DashboardProjetos from './dashboards/DashboardProjetos';
import EtapasForm from './components/etapasForm';
import EtapasList from './components/EtapasList';
import DashboardEtapas from './dashboards/DashboardEtapas';
import DashboardRelatorio from './dashboards/DashboardRelatorio';
import RelatorioList from './components/RelatorioList';
function App() {
  return (
   
    
    <Router>
    <Navbar/>
      <div className="containere">
        <Routes>
          <Route path="/" element={<DashboardPrincipal />} />
          <Route path="/dashboard/clientes" element={<DashboardClientes />} />
          <Route path="/clientes/cadastro/" element={<ClienteForm />} />
          <Route path="/clientes/lista" element={<ClienteList />} />
          <Route path="/dashboard/contrato" element={<DashboardContrato />} />
          <Route path="/consultor/cadastro" element={<ConsultorForm />} />
          <Route path="/consultor/lista" element={<ConsultorList />} />
          <Route path="/dashboard/consultor" element={<DashboardConsultor />} />
          <Route path="/dashboard/Projetos" element={<DashboardProjetos />} />
          <Route path="/dashboard/etapas" element={<DashboardEtapas />} />
          <Route path="/projetos/lista" element={<ProjetosList />} />
          <Route path="/contrato/cadastro" element={<ContratoForm />} />
          <Route path="/contrato/lista" element={<ContratoList />} />
          <Route path="/projetos/cadastro" element={<ProjetosForm />} />
          <Route path="/projetos/lista" element={<ProjetosList />} />
          <Route path="/etapas/cadastro" element={<EtapasForm />} />
          <Route path="/etapas/lista" element={<EtapasList />} />
          <Route path="/dashboard/relatorio" element={<DashboardRelatorio />} />
          <Route path="/relatorio/lista" element={<RelatorioList />} />

          



        </Routes>
      </div>
    </Router>

  );
}

export default App;
