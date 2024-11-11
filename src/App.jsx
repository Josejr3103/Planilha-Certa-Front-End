import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClienteForm from './components/ClienteForm';
import ClienteList from './components/ClienteList';
import CadastrarProjeto from './components/CadastrarProjeto';
import ListarProjetos from './components/ListarProjetos';
import DashboardClientes from './dashboards/DashboardClientes';

function App() {
  return (
    <Router>
      <div className="containere">
        <Routes>
          <Route path="/" element={<DashboardClientes />} />
          <Route path="/clientes/cadastro" element={<ClienteForm />} />
          <Route path="/clientes/lista" element={<ClienteList />} />
          <Route path="/projetos/cadastro" element={<CadastrarProjeto />} />
          <Route path="/projetos/lista" element={<ListarProjetos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
