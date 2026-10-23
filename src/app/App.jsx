
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import CadastroNeocore from './CadastroNeocore';
import ImportarNeocore from './ImportarNeocore';
import Header from './Header';
import AcessoNegado from './AcessoNegado';
import SolicitarAcesso from './SolicitarAcesso';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<CadastroNeocore />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* <Route path="/" element={<ImportarNeocore />} />
        <Route path="/importar" element={<ImportarNeocore />} /> */}

        <Route path="/" element={<AcessoNegado />} />
        <Route path="/importar" element={<AcessoNegado />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
