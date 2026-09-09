/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import FarmerDashboard from './components/dashboard/FarmerDashboard';
import TechnicalDashboard from './components/dashboard/TechnicalDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<FarmerDashboard />} />
          <Route path="technical" element={<TechnicalDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
