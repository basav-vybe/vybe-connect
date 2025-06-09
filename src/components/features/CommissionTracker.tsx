import React, { useState } from 'react';
import { 
  IndianRupee, 
  TrendingUp, 
  Download, 
  Filter,
  Search,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  Eye,
  FileText,
  Building2,
  Users,
  Target,
  PieChart,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Edit
} from 'lucide-react';

const CommissionTracker: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<any>(null);

  const commissionStats = [
    { 
      label: 'Total Earned (This Year)', 
      value: '₹8.4L', 
      change: '+22%', 
      color: 'green',
      icon: TrendingUp 
    },
    { 
      label: 'Pending Payouts', 
      value: '₹2.1L', 
      change: '4 deals', 
      color: 'orange',
      icon: Clock 
    },
    { 
      label: 'This Month', 
      value: '₹1.8L', 
      change: '+18%', 
      color: 'blue',
      icon: IndianRupee 
    },
    { 
      label: 'Average per Deal', 
      value: '₹45K', 
      change: '+8%', 
      color: 'teal',
      icon: Target 
    }
  ];

  const commissionDeals = [
    {
      id: 1,
      clientName: 'Priya Sharma',
      project: 'Phoenix One Bangalore West',
      dealValue: '₹1.2Cr',
      commissionRate: '2%',
      grossCommission: '₹2.4L',
      yourShare: '₹1.8L',
      cobrokerShare: '₹60K',
      status: 'Paid',
      payoutDate: '2024-01-10',
      dealCloseDate: '2024-01-05',
      paymentMethod: 'Bank Transfer',
      invoiceNumber: 'INV-2024-001',
      split: '75-25',
      coBroker: 'Rajesh Kumar'
    },
    {
      id: 2,
      clientName: 'Amit Kumar',
      project: 'Sobha Dream Acres',
      dealValue: '₹95L',
      commissionRate: '2.5%',
      grossCommission: '₹2.37L',
      yourShare: '₹1.19L',
      cobrokerShare: '₹1.18L',
      status: 'Pending',
      payoutDate: '2024-01-25',
      dealCloseDate: '2024-01-15',
      paymentMethod: 'Pending',
      invoiceNumber: 'INV-2024-002',
      split: '50-50',
      coBroker: 'Neha Gupta'
    },
    {
      id: 3,
      clientName: 'Rakesh Gupta',
      project: 'Prestige Lakeside Habitat',
      dealValue: '₹2.8Cr',
      commissionRate: '1.8%',
      grossCommission: '₹5.04L',
      yourShare: '₹5.04L',
      cobrokerShare: null,
      status: 'Processing',
      payoutDate: '2024-02-01',
      dealCloseDate: '2024-01-20',
      paymentMethod: 'Pending',
      invoiceNumber: 'INV-2024-003',
      split: '100-0',
      coBroker: null
    },
    {
      id: 4,
      clientName: 'Anita Singh',
      project: 'Brigade Gateway',
      dealValue: '₹1.8Cr',
      commissionRate: '2.2%',
      grossCommission: '₹3.96L',
      yourShare: '₹2.38L',
      cobrokerShare: '₹1.58L',
      status: 'Disputed',
      payoutDate: 'TBD',
      dealCloseDate: '2024-01-18',
      paymentMethod: 'On Hold',
      invoiceNumber: 'INV-2024-004',
      split: '60-40',
      coBroker: 'Suresh Reddy'
    }
  ];

  const monthlyData = [
    { month: 'Jan', earnings: 180000 },
    { month: 'Feb', earnings: 220000 },
    { month: 'Mar', earnings: 195000 },
    { month: 'Apr', earnings: 240000 },
    { month: 'May', earnings: 185000 },
    { month: 'Jun', earnings: 275000 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Disputed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Paid': return <CheckCircle2 className="h-4 w-4 text-green-600" />;
      case 'Pending': return <Clock className="h-4 w-4 text-orange-600" />;
      case 'Processing': return <AlertCircle className="h-4 w-4 text-blue-600" />;
      case 'Disputed': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const totalPending = commissionDeals
    .filter(deal => deal.status === 'Pending' || deal.status === 'Processing')
    .reduce((sum, deal) => sum + parseFloat(deal.yourShare.replace('₹', '').replace('L', '')) * 100000, 0);

  const totalEarned = commissionDeals
    .filter(deal => deal.status === 'Paid')
    .reduce((sum, deal) => sum + parseFloat(deal.yourShare.replace('₹', '').replace('L', '')) * 100000, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Commission Tracker</h1>
          <p className="text-gray-600">Track your earnings, payouts, and commission splits</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            Add Deal
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commissionStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className={`text-sm mt-1 ${
                    stat.change.includes('+') ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Insights */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Monthly Trend */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Monthly Earnings Trend</h2>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">{month.month}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(month.earnings / 300000) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-gray-900">
                      ₹{(month.earnings / 100000).toFixed(1)}L
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Commission Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Commission Breakdown</h2>
              <PieChart className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-green-900">Paid Commissions</p>
                <p className="text-xs text-green-700">12 deals</p>
              </div>
              <p className="text-lg font-bold text-green-900">₹{(totalEarned / 100000).toFixed(1)}L</p>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-orange-900">Pending Payouts</p>
                <p className="text-xs text-orange-700">4 deals</p>
              </div>
              <p className="text-lg font-bold text-orange-900">₹{(totalPending / 100000).toFixed(1)}L</p>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Success Rate</span>
                <span className="text-sm font-semibold text-gray-900">89%</span>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-600">Avg. Deal Size</span>
                <span className="text-sm font-semibold text-gray-900">₹1.5Cr</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Deals ({commissionDeals.length})
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'pending'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Pending ({commissionDeals.filter(d => d.status === 'Pending' || d.status === 'Processing').length})
            </button>
            <button
              onClick={() => setActiveTab('paid')}
              className={`py-4 border-b-2 font-medium text-sm ${
                activeTab === 'paid'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Paid ({commissionDeals.filter(d => d.status === 'Paid').length})
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search deals..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Projects</option>
                <option>Phoenix One Bangalore West</option>
                <option>Sobha Dream Acres</option>
                <option>Prestige Lakeside Habitat</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Deals Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Deal Details</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Commission</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Split & Co-Broker</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Payout</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {commissionDeals
                .filter(deal => {
                  if (activeTab === 'pending') return deal.status === 'Pending' || deal.status === 'Processing';
                  if (activeTab === 'paid') return deal.status === 'Paid';
                  return true;
                })
                .map((deal) => (
                  <tr key={deal.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{deal.clientName}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Building2 className="h-4 w-4 mr-1" />
                          {deal.project}
                        </div>
                        <p className="text-sm text-gray-600">Deal: {deal.dealValue}</p>
                        <p className="text-xs text-gray-500">Closed: {deal.dealCloseDate}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-gray-900">{deal.grossCommission}</p>
                        <p className="text-sm text-gray-600">{deal.commissionRate} rate</p>
                        <p className="text-sm font-medium text-blue-600">Your share: {deal.yourShare}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{deal.split} split</p>
                        {deal.coBroker ? (
                          <>
                            <div className="flex items-center text-sm text-gray-600 mt-1">
                              <Users className="h-4 w-4 mr-1" />
                              {deal.coBroker}
                            </div>
                            <p className="text-xs text-gray-500">Their share: {deal.cobrokerShare}</p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-600">Solo deal</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(deal.status)}
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(deal.status)}`}>
                          {deal.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900">{deal.payoutDate}</p>
                        <p className="text-xs text-gray-600">{deal.paymentMethod}</p>
                        {deal.invoiceNumber && (
                          <p className="text-xs text-gray-500">{deal.invoiceNumber}</p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setSelectedDeal(deal);
                            setShowPayoutModal(true);
                          }}
                          className="p-2 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="h-4 w-4 text-blue-600" />
                        </button>
                        <button className="p-2 hover:bg-green-50 rounded-lg transition-colors" title="Download Invoice">
                          <FileText className="h-4 w-4 text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors" title="Edit Deal">
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

      {/* Deal Details Modal */}
      {showPayoutModal && selectedDeal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Commission Details</h2>
                  <p className="text-gray-600">{selectedDeal.clientName} - {selectedDeal.project}</p>
                </div>
                <button 
                  onClick={() => setShowPayoutModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <XCircle className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Status and Overview */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(selectedDeal.status)}
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(selectedDeal.status)}`}>
                      {selectedDeal.status}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{selectedDeal.yourShare}</p>
                    <p className="text-sm text-gray-600">Your Commission</p>
                  </div>
                </div>
              </div>

              {/* Deal Breakdown */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Deal Breakdown</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Deal Value</label>
                    <p className="text-gray-900 font-semibold">{selectedDeal.dealValue}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Commission Rate</label>
                    <p className="text-gray-900 font-semibold">{selectedDeal.commissionRate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Gross Commission</label>
                    <p className="text-gray-900 font-semibold">{selectedDeal.grossCommission}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Split Ratio</label>
                    <p className="text-gray-900 font-semibold">{selectedDeal.split}</p>
                  </div>
                </div>
              </div>

              {/* Co-Broker Information */}
              {selectedDeal.coBroker && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Co-Broker Details</h3>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-3 mb-2">
                      <Users className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-900">{selectedDeal.coBroker}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Their Share</label>
                        <p className="text-gray-900 font-semibold">{selectedDeal.cobrokerShare}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-600">Your Share</label>
                        <p className="text-gray-900 font-semibold">{selectedDeal.yourShare}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Deal Close Date</label>
                    <p className="text-gray-900">{selectedDeal.dealCloseDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Expected Payout</label>
                    <p className="text-gray-900">{selectedDeal.payoutDate}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Payment Method</label>
                    <p className="text-gray-900">{selectedDeal.paymentMethod}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Invoice Number</label>
                    <p className="text-gray-900">{selectedDeal.invoiceNumber}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Invoice
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Edit Details
                </button>
                {selectedDeal.status === 'Pending' && (
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Mark as Paid
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommissionTracker;