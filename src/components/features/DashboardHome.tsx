import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  Building2, 
  ArrowUpRight, 
  Clock,
  AlertCircle,
  CheckCircle2,
  Target,
  Phone,
  MessageCircle,
  MapPin,
  DollarSign,
  ArrowDownRight,
  BarChart3
} from 'lucide-react';

const DashboardHome: React.FC = () => {
  const stats = [
    { label: 'Active Leads', value: '24', change: '+12%', icon: Users, color: 'blue' },
    { label: 'Projects Listed', value: '8', change: '+2', icon: Building2, color: 'teal' },
    { label: 'Site Visits Today', value: '3', change: '2 confirmed', icon: Calendar, color: 'orange' },
    { label: 'This Month Revenue', value: '₹2.4L', change: '+18%', icon: TrendingUp, color: 'green' },
  ];

  const recentLeads = [
    { 
      name: 'Priya Sharma', 
      budget: '₹80L - ₹1Cr', 
      location: 'Whitefield', 
      status: 'Hot', 
      lastContact: '2 hours ago',
      phone: '+91 98765 43210'
    },
    { 
      name: 'Amit Kumar', 
      budget: '₹1.2Cr - ₹1.5Cr', 
      location: 'Electronic City', 
      status: 'Warm', 
      lastContact: '1 day ago',
      phone: '+91 87654 32109'
    },
    { 
      name: 'Rakesh Gupta', 
      budget: '₹60L - ₹80L', 
      location: 'HSR Layout', 
      status: 'Cold', 
      lastContact: '3 days ago',
      phone: '+91 76543 21098'
    },
  ];

  const upcomingVisits = [
    { 
      client: 'Priya Sharma', 
      project: 'Phoenix One Bangalore West', 
      time: '2:00 PM', 
      status: 'confirmed' 
    },
    { 
      client: 'Rajesh Mehta', 
      project: 'Sobha Dream Acres', 
      time: '4:30 PM', 
      status: 'pending' 
    },
    { 
      client: 'Anita Singh', 
      project: 'Prestige Lakeside Habitat', 
      time: '6:00 PM', 
      status: 'confirmed' 
    },
  ];

  // Demo metrics
  const metrics = [
    {
      title: 'Total Leads',
      value: '1,234',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Active Projects',
      value: '45',
      change: '+5.2%',
      trend: 'up',
      icon: Building2,
      color: 'green'
    },
    {
      title: 'Site Visits',
      value: '89',
      change: '+23.1%',
      trend: 'up',
      icon: Calendar,
      color: 'purple'
    },
    {
      title: 'Revenue',
      value: '₹2.4Cr',
      change: '+18.7%',
      trend: 'up',
      icon: DollarSign,
      color: 'yellow'
    }
  ];

  // Demo conversion funnel
  const funnelData = [
    { stage: 'Leads', count: 1234, conversion: '100%' },
    { stage: 'Qualified', count: 890, conversion: '72%' },
    { stage: 'Site Visits', count: 450, conversion: '50%' },
    { stage: 'Negotiations', count: 180, conversion: '40%' },
    { stage: 'Closed', count: 72, conversion: '40%' }
  ];

  // Demo performance trends
  const performanceTrends = [
    { month: 'Jan', leads: 120, visits: 45, deals: 8 },
    { month: 'Feb', leads: 150, visits: 60, deals: 12 },
    { month: 'Mar', leads: 180, visits: 75, deals: 15 },
    { month: 'Apr', leads: 220, visits: 90, deals: 18 },
    { month: 'May', leads: 280, visits: 110, deals: 22 },
    { month: 'Jun', leads: 320, visits: 130, deals: 25 }
  ];

  const smartNudges = [
    { 
      type: 'urgent', 
      message: 'Follow up with 3 leads before EOD', 
      icon: Clock, 
      action: 'View Leads' 
    },
    { 
      type: 'opportunity', 
      message: 'New project added near HSR — want to list it?', 
      icon: Building2, 
      action: 'View Project' 
    },
    { 
      type: 'reminder', 
      message: 'Commission report ready for download', 
      icon: TrendingUp, 
      action: 'Download' 
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Hot': return 'bg-red-100 text-red-800';
      case 'Warm': return 'bg-orange-100 text-orange-800';
      case 'Cold': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Good morning, Raju G!</h1>
        <p className="text-gray-600">Here's what's happening with your business today.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-${metric.color}-100`}>
                  <Icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
                <span className={`flex items-center text-sm font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.trend === 'up' ? <ArrowUpRight className="h-4 w-4 mr-1" /> : <ArrowDownRight className="h-4 w-4 mr-1" />}
                  {metric.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Smart Nudges */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">Smart Nudges</h2>
        <div className="space-y-3">
          {smartNudges.map((nudge, index) => {
            const Icon = nudge.icon;
            return (
              <div key={index} className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    nudge.type === 'urgent' ? 'bg-red-100' : 
                    nudge.type === 'opportunity' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      nudge.type === 'urgent' ? 'text-red-600' : 
                      nudge.type === 'opportunity' ? 'text-green-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className="text-gray-900">{nudge.message}</span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  {nudge.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Conversion Funnel */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h2>
        <div className="space-y-4">
          {funnelData.map((stage, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-sm text-gray-600">{stage.stage}</div>
              <div className="flex-1">
                <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: stage.conversion }}
                  />
                </div>
              </div>
              <div className="w-24 text-right">
                <div className="text-sm font-medium text-gray-900">{stage.count}</div>
                <div className="text-xs text-gray-500">{stage.conversion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Trends */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Trends</h2>
        <div className="h-64">
          <div className="flex items-end h-48 space-x-4">
            {performanceTrends.map((trend, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-end space-x-1 h-40">
                  <div 
                    className="w-1/3 bg-blue-700 rounded-t"
                    style={{ height: `${(trend.leads / 320) * 100}%` }}
                  />
                  <div 
                    className="w-1/3 bg-green-700 rounded-t"
                    style={{ height: `${(trend.visits / 130) * 100}%` }}
                  />
                  <div 
                    className="w-1/3 bg-purple-700 rounded-t"
                    style={{ height: `${(trend.deals / 25) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-gray-600 mt-2">{trend.month}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-700 rounded-full mr-2" />
              <span className="text-sm text-gray-600">Leads</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-700 rounded-full mr-2" />
              <span className="text-sm text-gray-600">Visits</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-700 rounded-full mr-2" />
              <span className="text-sm text-gray-600">Deals</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {recentLeads.map((lead, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{lead.budget} • {lead.location}</p>
                  <p className="text-xs text-gray-500">Last contact: {lead.lastContact}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                    <Phone className="h-4 w-4 text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-green-50 rounded-lg transition-colors">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Site Visits */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Today's Site Visits</h2>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                View Calendar
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4">
            {upcomingVisits.map((visit, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{visit.client}</h3>
                    {visit.status === 'confirmed' ? (
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-orange-600" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{visit.project}</p>
                  <p className="text-xs text-gray-500">{visit.time}</p>
                </div>
                <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                  <MapPin className="h-4 w-4 text-blue-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <span className="font-medium text-gray-900">Add Lead</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
            <Building2 className="h-8 w-8 text-teal-600 mb-2" />
            <span className="font-medium text-gray-900">New Project</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
            <Calendar className="h-8 w-8 text-orange-600 mb-2" />
            <span className="font-medium text-gray-900">Schedule Visit</span>
          </button>
          
          <button className="flex flex-col items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Target className="h-8 w-8 text-purple-600 mb-2" />
            <span className="font-medium text-gray-900">Qualify Lead</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;