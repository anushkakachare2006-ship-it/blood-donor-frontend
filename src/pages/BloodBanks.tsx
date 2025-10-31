import React, { useState } from 'react';
import { Building2, Lock, Plus, Search, Filter, Phone, MapPin, Clock } from 'lucide-react';

const BloodBanks = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('inventory');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blood bank inventory data
  const inventory = [
    { bloodType: 'A+', units: 45, expiry: '2025-02-15', status: 'Good' },
    { bloodType: 'A-', units: 12, expiry: '2025-02-10', status: 'Low' },
    { bloodType: 'B+', units: 38, expiry: '2025-02-20', status: 'Good' },
    { bloodType: 'B-', units: 8, expiry: '2025-02-08', status: 'Critical' },
    { bloodType: 'AB+', units: 15, expiry: '2025-02-18', status: 'Low' },
    { bloodType: 'AB-', units: 6, expiry: '2025-02-12', status: 'Critical' },
    { bloodType: 'O+', units: 52, expiry: '2025-02-25', status: 'Good' },
    { bloodType: 'O-', units: 9, expiry: '2025-02-14', status: 'Low' }
  ];

  const donorHistory = [
    { id: '001', name: 'Rahul Sharma', bloodType: 'O+', date: '2025-01-15', phone: '+91-9876543210' },
    { id: '002', name: 'Priya Patel', bloodType: 'A+', date: '2025-01-14', phone: '+91-9876543211' },
    { id: '003', name: 'Amit Kumar', bloodType: 'B+', date: '2025-01-13', phone: '+91-9876543212' },
    { id: '004', name: 'Sneha Singh', bloodType: 'AB+', date: '2025-01-12', phone: '+91-9876543213' }
  ];

  const bloodBanks = [
    {
      name: 'DY Patil Blood Bank',
      address: 'DY Patil Medical College and Hospital, Sant Tukaram Nagar, Pimpri, Pune - 411018',
      phone: '+91-020-2742-8800',
      email: 'bloodbank@dypatilinstitute.org',
      timings: '24 hours',
      license: 'MH/BLD/2023/001'
    },
    {
      name: 'Tapovan Blood Bank',
      address: 'Tapovan Multispeciality Hospital, PCMC, Pune - 411033',
      phone: '+91-020-2748-9900',
      email: 'bloodbank@tapovanhospital.com',
      timings: '6:00 AM - 10:00 PM',
      license: 'MH/BLD/2023/002'
    },
    {
      name: 'Jeevanjyoti Blood Bank',
      address: 'Jeevanjyoti Super-Speciality Hospital, Pimple Saudagar, PCMC, Pune - 411027',
      phone: '+91-020-2746-7700',
      email: 'bloodbank@jeevanjyoti.org',
      timings: '24 hours',
      license: 'MH/BLD/2023/003'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple demo login
    if (loginData.username === 'admin' && loginData.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials. Use admin/admin123 for demo.');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Good': return 'text-green-600 bg-green-100';
      case 'Low': return 'text-yellow-600 bg-yellow-100';
      case 'Critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Public Blood Banks Directory */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Blood Banks Directory
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find authorized blood banks in your area. All listed blood banks are verified 
                and licensed by health authorities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {bloodBanks.map((bank, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{bank.name}</h3>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold">
                      Licensed
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <MapPin className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{bank.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-red-600" />
                      <a href={`tel:${bank.phone}`} className="text-red-600 hover:text-red-700 font-medium">
                        {bank.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-red-600" />
                      <span className="text-gray-600 text-sm">{bank.timings}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">License: {bank.license}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="bg-white py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="bg-red-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Blood Bank Portal</h2>
              <p className="text-gray-600">
                Authorized blood bank staff login to manage inventory and track donations
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  Login to Portal
                </button>
              </form>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Login:</strong><br />
                  Username: admin<br />
                  Password: admin123
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blood Bank Management</h1>
            <p className="text-gray-600 mt-2">Manage your blood inventory and track donor history</p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-6 py-4 font-semibold ${
                activeTab === 'inventory'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Blood Inventory
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`px-6 py-4 font-semibold ${
                activeTab === 'history'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Donor History
            </button>
            <button
              onClick={() => setActiveTab('add')}
              className={`px-6 py-4 font-semibold ${
                activeTab === 'add'
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Add Blood Units
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'inventory' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Current Blood Inventory</h2>
                  <div className="flex space-x-2">
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-3 h-3 bg-green-100 rounded"></div>
                      <span>Good Stock</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-3 h-3 bg-yellow-100 rounded"></div>
                      <span>Low Stock</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <div className="w-3 h-3 bg-red-100 rounded"></div>
                      <span>Critical</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {inventory.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-red-600">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-2xl font-bold text-gray-900">{item.bloodType}</span>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-semibold text-gray-700">{item.units} units</p>
                        <p className="text-sm text-gray-500">Expires: {item.expiry}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Donor History</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Search donors..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Donor ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Blood Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Donation Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {donorHistory.map((donor) => (
                        <tr key={donor.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {donor.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {donor.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              {donor.bloodType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {donor.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {donor.phone}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'add' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Add Blood Units to Inventory</h2>
                
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Blood Group
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option>Select Blood Group</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Units
                    </label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter number of units"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Collection Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Donor Information
                    </label>
                    <textarea
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      rows={3}
                      placeholder="Donor name, contact, and any special notes"
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Plus className="h-5 w-5" />
                      <span>Add to Inventory</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBanks;