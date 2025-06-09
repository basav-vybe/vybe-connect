import React, { useState } from 'react';
import { 
  Users, 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar, 
  IndianRupee,
  MapPin,
  Clock,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  User,
  Target,
  TrendingUp
} from 'lucide-react';

const LeadsCRM: React.FC = () => {
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const leads = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      budget: '₹80L - ₹1Cr',
      location: 'Whitefield',
      source: 'Website',
      status: 'New',
      priority: 'High',
      lastContact: '2 hours ago',
      nextFollowUp: 'Today 4:00 PM',
      interestedProjects: ['Phoenix One Bangalore West'],
      notes: 'Looking for 3BHK, ready to move properties',
      score: 85
    },
    {
      id: 2,
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      phone: '+91 87654 32109',
      budget: '₹1.2Cr - ₹1.5Cr',
      location: 'Electronic City',
      source: 'Referral',
      status: 'Qualified',
      priority: 'High',
      lastContact: '1 day ago',
      nextFollowUp: 'Tomorrow 10:00 AM',
      interestedProjects: ['Sobha Dream Acres', 'Phoenix One Bangalore West'],
      notes: 'Pre-approved loan, serious buyer',
      score: 92
    },
    {
      id: 3,
      name: 'Rakesh Gupta',
      email: 'rakesh.gupta@email.com',
      phone: '+91 76543 21098',
      budget: '₹60L - ₹80L',
      location: 'HSR Layout',
      source: 'WhatsApp',
      status: 'Proposal Sent',
      priority: 'Medium',
      lastContact: '3 days ago',
      nextFollowUp: 'Today 6:00 PM',
      interestedProjects: ['Prestige Lakeside Habitat'],
      notes: 'Comparing multiple options',
      score: 68
    },
    {
      id: 4,
      name: 'Anita Singh',
      email: 'anita.singh@email.com',
      phone: '+91 65432 10987',
      budget: '₹2Cr - ₹2.5Cr',
      location: 'Koramangala',
      source: 'Social Media',
      status: 'Site Visit Scheduled',
      priority: 'High',
      lastContact: '1 hour ago',
      nextFollowUp: 'Tomorrow 2:00 PM',
      interestedProjects: ['Prestige Lakeside Habitat'],
      notes: 'Looking for luxury apartments with lake view',
      score: 88
    }
  ];

  const stages = [
    { id: 'new', label: 'New Leads', color: 'blue', count: 8 },
    { id: 'qualified', label: 'Qualified', color: 'orange', count: 12 },
    { id: 'proposal', label: 'Proposal Sent', color: 'purple', count: 6 },
    { id: 'visit', label: 'Site Visit', color: 'teal', count: 4 },
    { id: 'negotiation', label: 'Negotiation', color: 'yellow', count: 3 },
    { id: 'closed', label: 'Closed Won', color: 'green', count: 15 }
  ];

  const getStageFromStatus = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'New': 'new',
      'Qualified': 'qualified',
      'Proposal Sent': 'proposal',
      'Site Visit Scheduled': 'visit',
      'Negotiation': 'negotiation',
      'Closed Won': 'closed'
    };
    return statusMap[status] || 'new';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-orange-100 text-orange-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads CRM</h1>
          <p className="text-gray-600">Manage and track your sales pipeline</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Import Leads
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">48</p>
              <p className="text-sm text-green-600 mt-1">+12 this week</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Qualified Leads</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">32</p>
              <p className="text-sm text-green-600 mt-1">67% conversion</p>
            </div>
            <Target className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pipeline Value</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">₹8.4Cr</p>
              <p className="text-sm text-green-600 mt-1">+18% this month</p>
            </div>
            <IndianRupee className="h-8 w-8 text-teal-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Response Time</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">2.4h</p>
              <p className="text-sm text-green-600 mt-1">-30 min improved</p>
            </div>
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Sources</option>
              <option>Website</option>
              <option>Referral</option>
              <option>WhatsApp</option>
              <option>Social Media</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('kanban')}
                className={`px-3 py-1 text-sm ${viewMode === 'kanban' ? 'bg-blue-600 text-white' : 'text-gray-600'} rounded-l-lg`}
              >
                Pipeline
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 text-sm ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-gray-600'} rounded-r-lg`}
              >
                Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4" style={{ minWidth: '1200px' }}>
            {stages.map((stage) => (
              <div key={stage.id} className="flex-shrink-0 w-80">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">{stage.label}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${stage.color}-100 text-${stage.color}-800`}>
                        {stage.count}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4 max-h-96 overflow-y-auto">
                    {leads
                      .filter(lead => getStageFromStatus(lead.status) === stage.id)
                      .map((lead) => (
                        <div key={lead.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                              <p className="text-sm text-gray-600">{lead.email}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                                {lead.priority}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2 mb-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <IndianRupee className="h-4 w-4 mr-2" />
                              {lead.budget}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2" />
                              {lead.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Target className="h-4 w-4 mr-2" />
                              <span className={`font-medium ${getScoreColor(lead.score)}`}>
                                Score: {lead.score}
                              </span>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              Last: {lead.lastContact}
                            </span>
                            <div className="flex space-x-1">
                              <button className="p-1 hover:bg-blue-100 rounded">
                                <Phone className="h-3 w-3 text-blue-600" />
                              </button>
                              <button className="p-1 hover:bg-green-100 rounded">
                                <MessageCircle className="h-3 w-3 text-green-600" />
                              </button>
                              <button className="p-1 hover:bg-orange-100 rounded">
                                <Calendar className="h-3 w-3 text-orange-600" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Lead</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Contact</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Budget & Location</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Score</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Next Follow-up</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{lead.name}</p>
                          <p className="text-sm text-gray-600">{lead.source}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900">{lead.email}</p>
                        <p className="text-sm text-gray-600">{lead.phone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{lead.budget}</p>
                        <p className="text-sm text-gray-600">{lead.location}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-medium ${getScoreColor(lead.score)}`}>
                        {lead.score}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <span className="text-sm font-medium text-gray-900">{lead.status}</span>
                        <span className={`inline-flex w-fit px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(lead.priority)}`}>
                          {lead.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900">{lead.nextFollowUp}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <Phone className="h-4 w-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                          <MessageCircle className="h-4 w-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors">
                          <Calendar className="h-4 w-4 text-orange-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsCRM;