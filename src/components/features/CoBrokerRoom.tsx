import React, { useState } from 'react';
import { 
  Users, 
  Share2, 
  Send, 
  Plus, 
  Eye, 
  MessageCircle, 
  IndianRupee,
  Calendar,
  CheckCircle2,
  Clock,
  User,
  Building2,
  Phone,
  Mail,
  Star,
  Filter,
  Search
} from 'lucide-react';

const CoBrokerRoom: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [activeTab, setActiveTab] = useState('shared');

  const sharedListings = [
    {
      id: 1,
      project: 'Phoenix One Bangalore West',
      sharedWith: 'Rajesh Kumar',
      sharedBy: 'You',
      commissionSplit: '50-50',
      status: 'Active',
      responses: 3,
      leads: 8,
      lastActivity: '2 hours ago',
      sharedDate: '2 days ago',
      brokerRating: 4.8,
      brokerPhone: '+91 98765 43210'
    },
    {
      id: 2,
      project: 'Sobha Dream Acres',
      sharedWith: 'Priya Sharma',
      sharedBy: 'You',
      commissionSplit: '60-40',
      status: 'Active',
      responses: 1,
      leads: 4,
      lastActivity: '5 hours ago',
      sharedDate: '1 week ago',
      brokerRating: 4.6,
      brokerPhone: '+91 87654 32109'
    },
    {
      id: 3,
      project: 'Prestige Lakeside Habitat',
      sharedWith: 'Amit Patel',
      sharedBy: 'Neha Gupta',
      commissionSplit: '40-60',
      status: 'Closed',
      responses: 12,
      leads: 25,
      lastActivity: '3 days ago',
      sharedDate: '2 months ago',
      brokerRating: 4.9,
      brokerPhone: '+91 76543 21098'
    }
  ];

  const invitations = [
    {
      id: 1,
      project: 'Brigade Gateway',
      invitedBy: 'Suresh Reddy',
      commissionSplit: '45-55',
      message: 'High-end project in prime location. Looking for experienced co-broker.',
      sentDate: '1 hour ago',
      deadline: '2 days',
      projectValue: '₹2.5Cr',
      brokerRating: 4.7
    },
    {
      id: 2,
      project: 'Godrej Splendour',
      invitedBy: 'Kavya Nair',
      commissionSplit: '50-50',
      message: 'Great investment opportunity. Multiple unit types available.',
      sentDate: '1 day ago',
      deadline: '5 days',
      projectValue: '₹1.8Cr',
      brokerRating: 4.5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Co-Broker Room</h1>
          <p className="text-gray-600">Collaborate with other brokers and share listings</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button 
            onClick={() => setShowInviteModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Invite Co-Broker
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share Listing
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Collaborations</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
              <p className="text-sm text-green-600 mt-1">+3 this month</p>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Shared Listings</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">18</p>
              <p className="text-sm text-green-600 mt-1">+5 this week</p>
            </div>
            <Share2 className="h-8 w-8 text-teal-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Commission</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">₹4.2L</p>
              <p className="text-sm text-green-600 mt-1">+22% this quarter</p>
            </div>
            <IndianRupee className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Successful Deals</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">8</p>
              <p className="text-sm text-green-600 mt-1">67% success rate</p>
            </div>
            <CheckCircle2 className="h-8 w-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('shared')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'shared'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Shared Listings ({sharedListings.length})
            </button>
            <button
              onClick={() => setActiveTab('invitations')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'invitations'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Invitations ({invitations.length})
            </button>
          </div>
        </div>

        {/* Shared Listings Tab */}
        {activeTab === 'shared' && (
          <div className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search collaborations..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Closed</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {sharedListings.map((listing) => (
                <div key={listing.id} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">{listing.project}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(listing.status)}`}>
                          {listing.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Co-Broker</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="h-3 w-3 text-blue-600" />
                            </div>
                            <span className="font-medium text-gray-900">{listing.sharedWith}</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs text-gray-600 ml-1">{listing.brokerRating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Commission Split</p>
                          <p className="font-medium text-gray-900 mt-1">{listing.commissionSplit}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Performance</p>
                          <p className="font-medium text-gray-900 mt-1">
                            {listing.leads} leads • {listing.responses} responses
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Shared: {listing.sharedDate}</span>
                        <span>Last activity: {listing.lastActivity}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex space-x-2">
                      <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors">
                        <Phone className="h-4 w-4 text-orange-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Invitations Tab */}
        {activeTab === 'invitations' && (
          <div className="p-6">
            <div className="space-y-4">
              {invitations.map((invitation) => (
                <div key={invitation.id} className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Building2 className="h-5 w-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-900">{invitation.project}</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">
                          Pending Response
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Invited by</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="h-3 w-3 text-blue-600" />
                            </div>
                            <span className="font-medium text-gray-900">{invitation.invitedBy}</span>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs text-gray-600 ml-1">{invitation.brokerRating}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Commission Split</p>
                          <p className="font-medium text-gray-900 mt-1">{invitation.commissionSplit}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600">Project Value</p>
                          <p className="font-medium text-gray-900 mt-1">{invitation.projectValue}</p>
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg mb-4">
                        <p className="text-sm text-gray-700">"{invitation.message}"</p>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          Sent: {invitation.sentDate}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Deadline: {invitation.deadline}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:ml-6 flex space-x-3">
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Accept
                      </button>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                        Decline
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Invite Co-Broker Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Invite Co-Broker</h2>
              <p className="text-gray-600 mt-1">Share your listing with another broker</p>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Project
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Phoenix One Bangalore West</option>
                  <option>Sobha Dream Acres</option>
                  <option>Prestige Lakeside Habitat</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Broker Contact
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number or email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Commission Split (You - Co-Broker)
                </label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>50% - 50%</option>
                  <option>60% - 40%</option>
                  <option>70% - 30%</option>
                  <option>Custom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Add a message for the co-broker..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex space-x-3">
              <button 
                onClick={() => setShowInviteModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoBrokerRoom;