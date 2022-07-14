// import logo from './logo.svg';
import './App.css';

import MainList from './List';
import AuditTrail from './pages/AuditTrail'
import PendingApprovals from './pages/PedingApprovals';
// import AddNewMetadata from './AddNewMetadata';
// import AddNewTechnicalData from './AddNewTechnicalData';
// import PendingApprovals from './PendingApprovals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import { ConfigView } from './ConfigView';
import { ConfigEdit } from './ConfigEdit';

// require ('bootstrap-icons')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainList />} />
        <Route path="/audit_trail" element={<AuditTrail />} />
        <Route path="/pending_approval" element={<PendingApprovals />} />
        <Route path="/config_view" element={<ConfigView />} />
        <Route path="/config_edit" element={<ConfigEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
