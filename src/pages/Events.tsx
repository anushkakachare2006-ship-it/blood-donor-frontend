import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Phone, AlertCircle, Plus } from 'lucide-react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Blood Donation Drive at DY Patil Institute',
      date: '2025-02-15',
      time: '9:00 AM - 5:00 PM',
      location: 'DY Patil Institute of Technology, Pimpri',
      organizer: 'BloodConnect Team',
      contact: '+91-020-2742-8888',
      expectedDonors: 200,
      currentRegistrations: 145,
      category: 'drive',
      description: 'Join us for a mega blood donation camp at DY Patil Institute. Free health checkup and refreshments for all donors.',
      requirements: ['Age 18-65', 'Weight 50kg+', 'Good Health', 'Valid ID'],
      image: 'https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Thalassemia Awareness & Blood Collection',
      date: '2025-02-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Tapovan Hospital, PCMC',
      organizer: 'Tapovan Hospital',
      contact: '+91-020-2748-9900',
      expectedDonors: 150,
      currentRegistrations: 89,
      category: 'awareness',
      description: 'Special awareness program about Thalassemia with blood donation drive for affected patients.',
      requirements: ['Age 18-60', 'Healthy', 'No recent illness'],
      image: 'https://images.pexels.com/photos/6823543/pexels-photo-6823543.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Emergency Blood Collection for Accident Victims',
      date: '2025-02-10',
      time: '24 Hours',
      location: 'Multiple Locations',
      organizer: 'BloodConnect Emergency Team',
      contact: '+91-020-2742-8888',
      expectedDonors: 100,
      currentRegistrations: 67,
      category: 'emergency',
      description: 'Urgent blood collection drive following recent accidents. All blood types needed immediately.',
      requirements: ['Immediate availability', 'All blood types'],
      image: 'https://images.pexels.com/photos/6823661/pexels-photo-6823661.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'World Blood Donor Day Celebration',
      date: '2025-06-14',
      time: '8:00 AM - 6:00 PM',
      location: 'Central Pune',
      organizer: 'Government Health Department',
      contact: '+91-020-2742-8888',
      expectedDonors: 500,
      currentRegistrations: 234,
      category: 'celebration',
      description: 'Annual celebration of World Blood Donor Day with massive donation drive and awareness programs.',
      requirements: ['Age 18-65', 'Good Health', 'No recent donations'],
      image: 'https://images.pexels.com/photos/6823545/pexels-photo-6823545.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const articles = [
    {
      title: 'Why Regular Blood Donation is Important',
      excerpt: 'Learn about the health benefits of regular blood donation and how it helps save lives in your community.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '5 min read'
    },
    {
      title: 'Preparing for Your First Blood Donation',
      excerpt: 'A complete guide for first-time donors covering preparation, process, and post-donation care.',
      image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '7 min read'
    },
    {
      title: 'Blood Types and Compatibility Guide',
      excerpt: 'Understanding different blood types, compatibility, and why diverse donors are needed.',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 min read'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'drive': return 'bg-blue-100 text-blue-800';
      case 'awareness': return 'bg-green-100 text-green-800';
      case 'emergency': return 'bg-red-100 text-red-800';
      case 'celebration': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Events & Awareness Programs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our blood donation drives, awareness campaigns, and community events. 
            Together, we can save more lives and build a stronger donor network.
          </p>
        </div>

        {/* Event Categories */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedCategory('drive')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'drive'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Donation Drives
            </button>
            <button
              onClick={() => setSelectedCategory('awareness')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'awareness'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Awareness Programs
            </button>
            <button
              onClick={() => setSelectedCategory('emergency')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                selectedCategory === 'emergency'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Emergency Drives
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredEvents.map((event) => {
            const registrationPercentage = (event.currentRegistrations / event.expectedDonors) * 100;
            
            return (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  {event.category === 'emergency' && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-red-600" />
                      <span>{new Date(event.date).toLocaleDateString('en-IN')} at {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4 text-red-600" />
                      <span>{event.contact}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Registration Progress</span>
                      <span className="text-sm text-gray-600">
                        {event.currentRegistrations} / {event.expectedDonors}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(registrationPercentage)}`}
                        style={{ width: `${Math.min(registrationPercentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {event.requirements.map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                      Register Now
                    </button>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Educational Articles */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Educational Resources & Health Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-600 font-semibold text-sm group-hover:underline">Read More</span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-red-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Want to Organize a Blood Drive?</h2>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Partner with us to organize blood donation drives at your organization, school, or community. 
            We provide all the support you need to make it successful.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
              <Plus className="h-5 w-5 mr-2" />
              Organize Event
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200">
              Get Event Alerts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;