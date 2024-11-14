import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import CadastrarProjeto from './components/CadastrarProjeto';
import ListarProjetos from './components/ListarProjetos';
import DashboardClientes from './dashboards/DashboardClientes';
import DashboardPrincipal from './dashboards/DashboardPrincipal';
import ConsultorForm from './components/ConsultorForm';
import ConsultorList from './components/ConsultorList';
import DashboardConsultor from './dashboards/DashboardConsultor';
import ContratoList from './components/ContratoList';
import ContratoForm from './components/ContratoForm';
import DashboardContrato from './dashboards/DashboardContrato';
function App() {
  return (
    <Router>
      <div className="containere">
        <Routes>
          <Route path="/" element={<DashboardPrincipal />} />
          <Route path="/dashboard/clientes" element={<DashboardClientes />} />
          <Route path="/clientes/cadastro/" element={<ClienteForm />} />
          <Route path="/clientes/lista" element={<ClienteList />} />
          <Route path="/projetos/cadastro" element={<CadastrarProjeto />} />
          <Route path="/projetos/lista" element={<ListarProjetos />} />
          <Route path="/consultor/cadastro" element={<ConsultorForm />} />
          <Route path="/consultor/lista" element={<ConsultorList />} />
          <Route path="/dashboard/consultor" element={<DashboardConsultor />} />
          <Route path="/dashboard/contrato" element={<DashboardContrato />} />
          <Route path="/contrato/cadastro" element={<ContratoForm />} />
          <Route path="/contrato/lista" element={<ContratoList />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
