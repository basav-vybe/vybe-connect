import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DashboardHome from './features/DashboardHome';
import ProjectsInventory from './features/ProjectsInventory';
import LeadsCRM from './features/LeadsCRM';
import CoBrokerRoom from './features/CoBrokerRoom';
import SiteVisitCalendar from './features/SiteVisitCalendar';
import CommissionTracker from './features/CommissionTracker';
import VybeAI from './features/VybeAI';
import LeadQualification from './features/LeadQualification';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'projects':
        return <ProjectsInventory />;
      case 'leads':
        return <LeadsCRM />;
      case 'cobroker':
        return <CoBrokerRoom />;
      case 'calendar':
        return <SiteVisitCalendar />;
      case 'commission':
        return <CommissionTracker />;
      case 'ai':
        return <VybeAI />;
      case 'qualification':
        return <LeadQualification />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={onLogout}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;