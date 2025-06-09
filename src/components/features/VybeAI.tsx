import React, { useState } from 'react';
import { 
  Bot, 
  MessageCircle, 
  Send, 
  Lightbulb, 
  TrendingUp, 
  Users, 
  Building2, 
  Target,
  Clock,
  Star,
  Zap,
  Brain,
  BarChart3,
  FileText,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';

const VybeAI: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your Vybe AI Co-Pilot. I can help you with lead insights, market analysis, and deal recommendations. What would you like to know?',
      timestamp: '10:30 AM'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const aiInsights = [
    {
      type: 'lead',
      title: 'High-Value Lead Alert',
      description: 'Priya Sharma matches your top buyer profile. 95% likelihood to close within 30 days.',
      action: 'Schedule Call',
      priority: 'high',
      icon: Target
    },
    {
      type: 'market',
      title: 'Market Opportunity',
      description: 'Whitefield prices up 12% this quarter. Consider promoting your listings there.',
      action: 'View Analysis',
      priority: 'medium',
      icon: TrendingUp
    },
    {
      type: 'deal',
      title: 'Deal Optimization',
      description: 'Reduce Phoenix One pricing by 3% to match market rate and increase conversion.',
      action: 'Adjust Pricing',
      priority: 'medium',
      icon: BarChart3
    }
  ];

  const quickActions = [
    { label: 'Analyze Lead Quality', icon: Users, color: 'blue' },
    { label: 'Market Price Comparison', icon: TrendingUp, color: 'green' },
    { label: 'Generate Proposal', icon: FileText, color: 'purple' },
    { label: 'Schedule Follow-ups', icon: Calendar, color: 'orange' }
  ];

  const aiCapabilities = [
    {
      title: 'Lead Scoring & Insights',
      description: 'AI analyzes lead behavior, budget, and timeline to predict conversion probability',
      icon: Target,
      features: ['Qualification scoring', 'Behavior analysis', 'Conversion prediction']
    },
    {
      title: 'Market Intelligence',
      description: 'Real-time market data and pricing recommendations for your listings',
      icon: BarChart3,
      features: ['Price optimization', 'Market trends', 'Competitor analysis']
    },
    {
      title: 'Smart Recommendations',
      description: 'Personalized suggestions for lead nurturing and deal closure strategies',
      icon: Lightbulb,
      features: ['Next best actions', 'Timing optimization', 'Communication tips']
    }
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: 'ai',
        content: 'I understand you\'re asking about ' + inputMessage + '. Let me analyze your data and provide insights. Based on your current pipeline, I recommend focusing on your high-scoring leads first.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-orange-200 bg-orange-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <Bot className="h-8 w-8 text-blue-600 mr-3" />
            Vybe AI Co-Pilot
          </h1>
          <p className="text-gray-600">Your intelligent assistant for smarter real estate decisions</p>
        </div>
        <div className="mt-4 sm:mt-0 flex space-x-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Train AI Model
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            AI Settings
          </button>
        </div>
      </div>

      {/* AI Insights Cards */}
      <div className="grid lg:grid-cols-3 gap-6">
        {aiInsights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div key={index} className={`p-6 rounded-xl border-2 ${getPriorityColor(insight.priority)}`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    insight.priority === 'high' ? 'bg-red-100' : 
                    insight.priority === 'medium' ? 'bg-orange-100' : 'bg-blue-100'
                  }`}>
                    <Icon className={`h-5 w-5 ${
                      insight.priority === 'high' ? 'text-red-600' : 
                      insight.priority === 'medium' ? 'text-orange-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      insight.priority === 'high' ? 'bg-red-100 text-red-800' : 
                      insight.priority === 'medium' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {insight.priority} priority
                    </span>
                  </div>
                </div>
                <Zap className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="text-gray-700 mb-4">{insight.description}</p>
              <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                {insight.action}
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* AI Chat Interface */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
              Ask Vybe AI
            </h2>
            <p className="text-gray-600 text-sm mt-1">Get instant insights about your leads and deals</p>
          </div>
          
          <div className="h-80 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-6 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about leads, market trends, or deal strategies..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Zap className="h-5 w-5 text-yellow-500 mr-2" />
              Quick AI Actions
            </h2>
            <p className="text-gray-600 text-sm mt-1">One-click AI-powered tools</p>
          </div>
          
          <div className="p-6 space-y-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left"
                >
                  <div className={`p-2 rounded-lg bg-${action.color}-100`}>
                    <Icon className={`h-5 w-5 text-${action.color}-600`} />
                  </div>
                  <span className="font-medium text-gray-900">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* AI Capabilities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <Brain className="h-5 w-5 text-purple-600 mr-2" />
            AI Capabilities
          </h2>
          <p className="text-gray-600 text-sm mt-1">Discover what Vybe AI can do for your business</p>
        </div>
        
        <div className="p-6 grid md:grid-cols-3 gap-6">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600 mb-4">{capability.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">AI Performance Impact</h2>
            <p className="text-gray-600">See how AI is improving your business metrics</p>
          </div>
          <div className="bg-white p-3 rounded-full">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">+40%</div>
            <p className="text-sm text-gray-600">Lead Conversion</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">-60%</div>
            <p className="text-sm text-gray-600">Response Time</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">+25%</div>
            <p className="text-sm text-gray-600">Deal Closure Rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">8.5h</div>
            <p className="text-sm text-gray-600">Time Saved/Week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VybeAI;