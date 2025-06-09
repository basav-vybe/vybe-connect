import React from 'react';
import { 
  Building2, 
  Users, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Smartphone,
  Mail,
  MessageCircle,
  BarChart3,
  Target,
  Clock,
  Shield
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img src="/branding/logo.svg" alt="Vybe Connect" className="h-8 w-auto" />
              <span className="text-2xl font-bold text-gray-900">Vybe Connect</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </button>
              <button 
                onClick={onLogin}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Command Center for
              <span className="text-blue-600 block">Modern Real Estate</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lead CRM, Inventory, Commissions, and Collaboration — All in One Platform.
              Close deals faster with AI-powered insights and seamless co-broker collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onLogin}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Started Free
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-gray-400 transition-colors">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vybe Connect */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Vybe Connect?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your real estate business in one powerful platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Lead Management</h3>
              <p className="text-gray-600">AI-powered lead scoring and qualification to focus on high-value prospects</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-teal-50 hover:bg-teal-100 transition-colors">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inventory & Projects</h3>
              <p className="text-gray-600">Centralized project management with real-time inventory tracking</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Co-Broker Collaboration</h3>
              <p className="text-gray-600">Seamless sharing and collaboration with commission management</p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Site Visit Scheduling</h3>
              <p className="text-gray-600">Automated scheduling with reminders and client management</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              From project upload to deal closure in four simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Project</h3>
              <p className="text-gray-600">Add your inventory with photos, pricing, and details</p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Capture Leads</h3>
              <p className="text-gray-600">Qualify and score incoming leads automatically</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share Listings</h3>
              <p className="text-gray-600">Collaborate with co-brokers and manage proposals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Closures</h3>
              <p className="text-gray-600">Monitor deals and calculate commissions automatically</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results
            </h2>
            <p className="text-lg text-gray-600">
              Join 120+ brokers using Vybe to close faster
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
              <p className="text-lg text-gray-900 font-semibold">Faster Lead Response</p>
              <p className="text-gray-600">With automated qualification</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">40%</div>
              <p className="text-lg text-gray-900 font-semibold">Higher Conversion</p>
              <p className="text-gray-600">Through better lead scoring</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
              <p className="text-lg text-gray-900 font-semibold">More Deals Closed</p>
              <p className="text-gray-600">With co-broker collaboration</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <blockquote className="text-lg text-gray-700 mb-4">
              "Vybe Connect transformed our lead management. We're closing 40% more deals with half the manual work. The AI qualification saves us hours every day."
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                RK
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">Rajesh Kumar</p>
                <p className="text-gray-600">Senior Broker, Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integrates With Your Tools
            </h2>
            <p className="text-lg text-gray-600">
              Connect with the platforms you already use
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <span className="font-semibold text-gray-900">WhatsApp</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Mail className="h-8 w-8 text-blue-600" />
              <span className="font-semibold text-gray-900">Email</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Smartphone className="h-8 w-8 text-gray-600" />
              <span className="font-semibold text-gray-900">Builder APIs</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <BarChart3 className="h-8 w-8 text-purple-600" />
              <span className="font-semibold text-gray-900">Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Start free, scale as you grow
            </p>
          </div>
          
          <div className="max-w-md mx-auto bg-white border-2 border-blue-200 rounded-2xl p-8 text-center">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">₹499</span>
              <span className="text-gray-600">/month</span>
            </div>
            
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Free for first 30 listings</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Unlimited lead management</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>AI qualification engine</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Co-broker collaboration</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>Commission tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                <span>24/7 support</span>
              </li>
            </ul>
            
            <button 
              onClick={onLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of brokers and builders who are closing more deals with Vybe Connect
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onLogin}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Using Vybe Connect Now
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <img src="/branding/logo.svg" alt="Vybe Connect" className="h-8 w-auto" />
            <span className="text-2xl font-bold">Vybe Connect</span>
          </div>
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Vybe Connect. All rights reserved.</p>
            <p className="mt-2">Empowering real estate professionals to close deals faster.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 md:hidden">
        <button 
          onClick={onLogin}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Started Free
        </button>
      </div>
    </div>
  );
};

export default LandingPage;