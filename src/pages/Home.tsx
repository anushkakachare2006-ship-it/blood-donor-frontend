import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, Calendar, ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, number: '50,000+', label: 'Registered Donors' },
    { icon: Heart, number: '25,000+', label: 'Lives Saved' },
    { icon: MapPin, number: '100+', label: 'Partner Hospitals' },
    { icon: Calendar, number: '500+', label: 'Donation Drives' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All donations follow WHO safety guidelines and protocols'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency blood request support'
    },
    {
      icon: Award,
      title: 'Verified Network',
      description: 'All blood banks and hospitals are verified and certified'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Save Lives Through
                <span className="block text-yellow-300">Easy Blood Donations</span>
              </h1>
              <p className="text-xl lg:text-2xl text-red-100 max-w-2xl">
                Connect with donors, request blood, and be part of a life-saving community. 
                Every drop counts, every donation matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Become a Donor
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  to="/request" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Request Blood
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="Blood donation" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold">Join Our Life-Saving Mission</p>
                  <p className="text-red-100">Together, we can make a difference</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BloodConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a secure, efficient, and user-friendly platform for blood donation management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300 mb-4">
                  <feature.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent Needs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Urgent Blood Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Help save lives by donating the blood types most needed right now
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['O+', 'A+', 'B+', 'AB+'].map((bloodType, index) => (
              <div key={index} className="bg-red-50 p-6 rounded-xl text-center border-2 border-red-100 hover:border-red-300 transition-colors duration-300">
                <div className="text-3xl font-bold text-red-600 mb-2">{bloodType}</div>
                <div className="text-sm text-gray-600 mb-3">Urgently Needed</div>
                <Link 
                  to="/register" 
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Donate Now
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Save Lives?
          </h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Join thousands of donors who are making a difference. Your single donation can save up to three lives.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;