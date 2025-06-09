import React, { useState } from 'react';
import { 
  Calendar, 
  Plus, 
  MapPin, 
  Clock, 
  
  User,
  Phone,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Edit,
  Trash2,
  Navigation,
  MessageCircle,
  Filter,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SiteVisitCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  const [showAddModal, setShowAddModal] = useState(false);

  const visits = [
    {
      id: 1,
      clientName: 'Priya Sharma',
      clientPhone: '+91 98765 43210',
      project: 'Phoenix One Bangalore West',
      date: '2024-01-15',
      time: '2:00 PM',
      status: 'confirmed',
      address: 'Rajaji Nagar, Bangalore',
      notes: 'Interested in 3BHK units, budget ₹1.2Cr',
      duration: '1 hour'
    },
    {
      id: 2,
      clientName: 'Amit Kumar',
      clientPhone: '+91 87654 32109',
      project: 'Sobha Dream Acres',
      date: '2024-01-15',
      time: '4:30 PM',
      status: 'pending',
      address: 'Electronic City, Bangalore',
      notes: 'First-time buyer, needs detailed explanation',
      duration: '1.5 hours'
    },
    {
      id: 3,
      clientName: 'Rakesh Gupta',
      clientPhone: '+91 76543 21098',
      project: 'Prestige Lakeside Habitat',
      date: '2024-01-16',
      time: '10:00 AM',
      status: 'confirmed',
      address: 'Whitefield, Bangalore',
      notes: 'Investment purpose, comparing multiple projects',
      duration: '45 minutes'
    },
    {
      id: 4,
      clientName: 'Anita Singh',
      clientPhone: '+91 65432 10987',
      project: 'Brigade Gateway',
      date: '2024-01-16',
      time: '3:00 PM',
      status: 'cancelled',
      address: 'Koramangala, Bangalore',
      notes: 'Rescheduled due to client emergency',
      duration: '1 hour'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'pending': return <AlertCircle className="h-4 w-4 text-orange-600" />;
      case 'cancelled': return <XCircle className="h-4 w-4 text-red-600" />;
      case 'completed': return <CheckCircle2 className="h-4 w-4 text-blue-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const todayVisits = visits.filter(visit => visit.date === '2024-01-15');
  const upcomingVisits = visits.filter(visit => new Date(visit.date) > new Date('2024-01-15'));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Visit Calendar</h1>
          <p className="text-gray-600">Schedule and manage client site visits</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Schedule Visit
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export Calendar
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Visits</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{todayVisits.length}</p>
              <p className="text-sm text-blue-600 mt-1">2 confirmed</p>
            </div>
            <Calendar className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              <p className="text-sm text-green-600 mt-1">+3 from last week</p>
            </div>
            <Clock className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">89%</p>
              <p className="text-sm text-green-600 mt-1">+5% this month</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-teal-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Duration</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">1.2h</p>
              <p className="text-sm text-gray-600 mt-1">Per visit</p>
            </div>
            <MapPin className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* View Toggle and Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
              <option>Completed</option>
            </select>
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Projects</option>
              <option>Phoenix One Bangalore West</option>
              <option>Sobha Dream Acres</option>
              <option>Prestige Lakeside Habitat</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-600">View:</span>
            <div className="flex border border-gray-300 rounded-lg">
              <button
                onClick={() => setViewMode('calendar')}
                className={`px-3 py-1 text-sm ${viewMode === 'calendar' ? 'bg-blue-600 text-white' : 'text-gray-600'} rounded-l-lg`}
              >
                Calendar
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 text-sm ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600'} rounded-r-lg`}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Visits - Always Visible */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Today's Visits</h2>
          <p className="text-gray-600">January 15, 2024</p>
        </div>
        <div className="p-6">
          {todayVisits.length > 0 ? (
            <div className="space-y-4">
              {todayVisits.map((visit) => (
                <div key={visit.id} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        {getStatusIcon(visit.status)}
                        <h3 className="font-semibold text-gray-900">{visit.clientName}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(visit.status)}`}>
                          {visit.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {visit.time} ({visit.duration})
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {visit.project}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="h-4 w-4 mr-2" />
                          {visit.clientPhone}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-700 bg-white p-2 rounded">{visit.notes}</p>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex space-x-2">
                      <button className="p-2 hover:bg-blue-100 rounded-lg transition-colors">
                        <Navigation className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-100 rounded-lg transition-colors">
                        <Phone className="h-4 w-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-orange-100 rounded-lg transition-colors">
                        <MessageCircle className="h-4 w-4 text-orange-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Edit className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No visits scheduled for today</p>
            </div>
          )}
        </div>
      </div>

      {/* Calendar/List View */}
      {viewMode === 'calendar' ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Calendar View</h2>
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <span className="font-medium text-gray-900">January 2024</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Calendar view coming soon</p>
              <p className="text-sm text-gray-500 mt-2">Use the list view to see all scheduled visits</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Visits</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Client</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Project</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Date & Time</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {visits.map((visit) => (
                  <tr key={visit.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{visit.clientName}</p>
                        <p className="text-sm text-gray-600">{visit.clientPhone}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{visit.project}</p>
                        <p className="text-sm text-gray-600">{visit.address}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{visit.date}</p>
                        <p className="text-sm text-gray-600">{visit.time} ({visit.duration})</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(visit.status)}`}>
                        {visit.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <Navigation className="h-4 w-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                          <Phone className="h-4 w-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4 text-red-600" />
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

      {/* Add Visit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Schedule Site Visit</h2>
              <p className="text-gray-600 mt-1">Add a new client visit to your calendar</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Name
                </label>
                <input
                  type="text"
                  placeholder="Enter client name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Client Phone
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select a project</option>
                  <option>Phoenix One Bangalore West</option>
                  <option>Sobha Dream Acres</option>
                  <option>Prestige Lakeside Habitat</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Add any special notes or requirements..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex space-x-3">
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowAddModal(false)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Visit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteVisitCalendar;