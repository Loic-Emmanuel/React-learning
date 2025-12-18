import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import ClientsList from './components/ClientsList';
import CreateClient from './components/CreateClient';
import ClientDetails from './components/ClientDetails';
import UpdateClient from './components/UpdateClient';
function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/clients" replace />} />
        <Route path="/clients" element={<ClientsList />} />
        <Route path="/clients/create" element={<CreateClient />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/clients/:id/update" element={<UpdateClient />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
