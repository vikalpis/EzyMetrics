import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Leads from './components/Leads';
import Analytics from './components/Analytics';
import Reports from './components/Reports';
import 'chart.js/auto';

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div className="container mx-auto px-6 py-8">
          {activeSection === 'Dashboard' && <Dashboard />}
          {activeSection === 'Leads' && <Leads />}
          {activeSection === 'Analytics' && <Analytics />}
          {activeSection === 'Reports' && <Reports />}
        </div>
      </main>
    </div>
  );
}

export default App;