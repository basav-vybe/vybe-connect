import React, { useState } from 'react';
import { 
  Target, 
  User, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle,
  Download,
  Eye,
  Edit,
  Archive,
  Calendar,
  FileText,
  Brain,
  TrendingUp,
  Filter,
  Search
} from 'lucide-react';

const LeadQualification: React.FC = () => {
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showQualificationReport, setShowQualificationReport] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 98765 43210',
      source: 'Website Form',
      budget: '₹80L - ₹1Cr',
      location: 'Whitefield',
      purpose: 'Investment',
      timeline: '3-6 months',
      score: 92,
      status: 'Qualified',
      qualification: {
        budget_verified: true,
        location_match: true,
        timeline_realistic: true,
        contact_responsive: true,
        decision_maker: true
      },
      lastActivity: '2 hours ago',
      notes: 'Looking for 3BHK apartments in tech corridor. Has pre-approved loan.'
    },
    {
      id: 2,
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      phone: '+91 87654 32109',
      source: 'Broker Referral',
      budget: '₹1.2Cr - ₹1.5Cr',
      location: 'Electronic City',
      purpose: 'Self Use',
      timeline: '1-3 months',
      score: 76,
      status: 'Needs Clarification',
      qualification: {
        budget_verified: true,
        location_match: true,
        timeline_realistic: false,
        contact_responsive: true,
        decision_maker: false
      },
      lastActivity: '1 day ago',
      notes: 'Needs to involve spouse in decision making. Timeline might be flexible.'
    },
    {
      id: 3,
      name: 'Rakesh Gupta',
      email: 'rakesh.gupta@email.com',
      phone: '+91 76543 21098',
      source: 'WhatsApp',
      budget: '₹60L - ₹80L',
      location: 'HSR Layout',
      purpose: 'Investment',
      timeline: '6+ months',
      score: 45,
      status: 'Archive',
      qualification: {
        budget_verified: false,
        location_match: true,
        timeline_realistic: true,
        contact_responsive: false,
        decision_maker: true
      },
      lastActivity: '5 days ago',
      notes: 'Unresponsive to calls. Budget seems unrealistic for location preference.'
    }
  ];

  const metrics = [
    { label: 'Total Leads Captured', value: '156', change: '+23%', color: 'blue' },
    { label: 'Qualified Leads', value: '89', change: '+18%', color: 'green' },
    { label: 'Site Visits Booked', value: '34', change: '+12%', color: 'orange' },
    { label: 'Avg. Qualification Score', value: '73', change: '+5%', color: 'purple' }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Qualified': return 'bg-green-100 text-green-800';
      case 'Needs Clarification': return 'bg-orange-100 text-orange-800';
      case 'Archive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status.toLowerCase().replace(' ', '_') === filterStatus);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Qualification Engine</h1>
          <p className="text-gray-600">AI-powered lead scoring and qualification system</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Import Leads
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Value Proposition Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Vybe Connect doesn't just give you leads — it tells you which ones are worth your time
            </h3>
            <p className="text-gray-700 mb-3">
              Save 10+ hours/week by focusing only on high-quality buyers with our AI qualification engine.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center text-green-700">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Auto-scored leads (0-100)
              </span>
              <span className="flex items-center text-green-700">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Smart qualification questionnaire
              </span>
              <span className="flex items-center text-green-700">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Actionable insights & recommendations
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                <p className="text-sm text-green-600 mt-1">{metric.change}</p>
              </div>
              <div className={`p-3 rounded-full bg-${metric.color}-100`}>
                <TrendingUp className={`h-6 w-6 text-${metric.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="qualified">Qualified</option>
              <option value="needs_clarification">Needs Clarification</option>
              <option value="archive">Archive</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{filteredLeads.length} leads</span>
          </div>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Lead Details</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Source</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Budget & Location</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Score</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{lead.name}</p>
                      <p className="text-sm text-gray-600">{lead.email}</p>
                      <p className="text-xs text-gray-500">{lead.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{lead.source}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{lead.budget}</p>
                      <p className="text-xs text-gray-600">{lead.location} • {lead.purpose}</p>
                      <p className="text-xs text-gray-500">{lead.timeline}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(lead.score)}`}>
                      <Target className="h-4 w-4 mr-1" />
                      {lead.score}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedLead(lead);
                          setShowQualificationReport(true);
                        }}
                        className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View Qualification Report"
                      >
                        <Eye className="h-4 w-4 text-blue-600" />
                      </button>
                      <button className="p-2 hover:bg-green-50 rounded-lg transition-colors" title="Create Proposal">
                        <FileText className="h-4 w-4 text-green-600" />
                      </button>
                      <button className="p-2 hover:bg-orange-50 rounded-lg transition-colors" title="Book Site Visit">
                        <Calendar className="h-4 w-4 text-orange-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors" title="Archive">
                        <Archive className="h-4 w-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Qualification Report Modal */}
      {showQualificationReport && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Lead Qualification Report</h2>
                  <p className="text-gray-600">{selectedLead.name}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Download className="h-5 w-5 text-gray-600" />
                  </button>
                  <button 
                    onClick={() => setShowQualificationReport(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <XCircle className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Overall Score */}
              <div className="text-center">
                <div className={`inline-flex items-center px-6 py-3 rounded-full text-2xl font-bold ${getScoreColor(selectedLead.score)}`}>
                  <Target className="h-6 w-6 mr-2" />
                  {selectedLead.score}/100
                </div>
                <p className="text-gray-600 mt-2">Overall Qualification Score</p>
              </div>

              {/* Qualification Breakdown */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualification Breakdown</h3>
                <div className="space-y-3">
                  {Object.entries(selectedLead.qualification).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        {key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      {value ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Lead Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Lead Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Budget Range</label>
                    <p className="text-gray-900">{selectedLead.budget}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Preferred Location</label>
                    <p className="text-gray-900">{selectedLead.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Purpose</label>
                    <p className="text-gray-900">{selectedLead.purpose}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Timeline</label>
                    <p className="text-gray-900">{selectedLead.timeline}</p>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Brain className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-900">Next Best Actions:</p>
                      <ul className="mt-2 space-y-1 text-sm text-blue-800">
                        {selectedLead.score >= 80 ? (
                          <>
                            <li>• Schedule site visit within 48 hours</li>
                            <li>• Prepare customized proposal</li>
                            <li>• Share similar successful case studies</li>
                          </>
                        ) : selectedLead.score >= 60 ? (
                          <>
                            <li>• Send clarification questionnaire</li>
                            <li>• Schedule discovery call</li>
                            <li>• Verify budget and decision-making process</li>
                          </>
                        ) : (
                          <>
                            <li>• Attempt re-engagement campaign</li>
                            <li>• Consider archiving if no response in 7 days</li>
                            <li>• Focus resources on higher-scored leads</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-lg">{selectedLead.notes}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Create Proposal
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Book Site Visit
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Send Clarification
                </button>
                <button className="border border-red-300 text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                  Archive Lead
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadQualification;