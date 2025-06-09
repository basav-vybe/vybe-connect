import React from 'react';
import { 
  Home, 
  FolderOpen, 
  Users, 
  UserCheck, 
  Calendar, 
  FileText, 
  TrendingUp, 
  MapPin, 
  Bot, 
  Settings, 
  LogOut,
  Menu,
  X,
  Target
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  onLogout, 
  isOpen, 
  setIsOpen 
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'projects', label: 'Projects / Inventory', icon: FolderOpen },
    { id: 'leads', label: 'Leads CRM', icon: Users },
    { id: 'qualification', label: 'Lead Qualification', icon: Target },
    { id: 'cobroker', label: 'Co-Broker Room', icon: UserCheck },
    { id: 'calendar', label: 'Site Visit Calendar', icon: Calendar },
    { id: 'commission', label: 'Commission Tracker', icon: TrendingUp },
    { id: 'ai', label: 'Vybe AI Co-Pilot', icon: Bot },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveTab(itemId);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 p-6 border-b border-gray-200">
            <img src="/branding/logo.svg" alt="Vybe Connect" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Vybe Connect</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors
                    ${activeTab === item.id 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                RG
              </div>
              <div>
                <p className="font-semibold text-gray-900">Raju Gowda</p>
                <p className="text-sm text-gray-600">Senior Broker</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              
              <button 
                onClick={onLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;