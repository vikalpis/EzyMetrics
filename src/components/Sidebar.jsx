import React from 'react';
import { Home, Users, BarChart2, FileText } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'Leads', icon: Users },
  { name: 'Analytics', icon: BarChart2 },
  { name: 'Reports', icon: FileText },
];

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-20 border-b">
        <span className="text-2xl font-semibold text-gray-800">EzyMetrics</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center w-full px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100 ${
                  activeSection === item.name ? 'bg-gray-100 text-gray-900' : ''
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;