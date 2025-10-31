import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    console.log('Contact form data:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Address',
      details: ['DY Patil Institute of Technology', 'Pimpri, Pune, Maharashtra 411018', 'India'],
      color: 'text-red-600'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +91-020-2742-8888',
        'Emergency: +91-020-2742-8800',
        'WhatsApp: +91-9876543210'
      ],
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: anushkakachare2012@gmail.com',
        'Emergency: emergency@bloodconnect.org',
        'Support: support@bloodconnect.org'
      ],
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Emergency: 24/7 Available'
      ],
      color: 'text-purple-600'
    }
  ];

  const inquiryTypes = [
    'General Information',
    'Blood Donation',
    'Blood Request',
    'Volunteer Opportunities',
    'Partnership',
    'Technical Support',
    'Media Inquiries',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about blood donation or need immediate assistance? 
            We're here to help 24/7. Get in touch with our support team.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Phone className="h-8 w-8 text-red-500" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-red-900">Emergency Blood Support</h3>
              <p className="text-red-700">
                For urgent blood requirements or life-threatening emergencies, call immediately: 
                <a href="tel:+91-020-2742-8888" className="font-bold text-red-600 hover:underline ml-1">
                  +91-020-2742-8888
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-gray-50 ${info.color}`}>
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-2 rounded-lg hover:bg-pink-700 transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.789L3.647 8.864c1.297 0 2.449.729 3.016 1.788l1.786 6.336z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="h-6 w-6 text-red-600 mr-2" />
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Brief subject of your message"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Please provide detailed information about your inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Response Time:</strong> We typically respond to general inquiries within 24 hours. 
                    For emergency blood requests, please call our helpline directly for immediate assistance.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="font-semibold">Interactive Map</p>
              <p className="text-sm">DY Patil Institute of Technology, Pimpri, Pune</p>
              <p className="text-sm mt-2">
                <a 
                  href="https://maps.google.com/?q=DY+Patil+Institute+of+Technology+Pimpri+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Quick Answers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">How quickly do you respond to blood requests?</h3>
              <p className="text-blue-800 text-sm">Emergency requests are handled immediately (within minutes), while general requests are processed within 2-4 hours.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Can I schedule a blood donation appointment?</h3>
              <p className="text-blue-800 text-sm">Yes, you can schedule appointments through our website or by calling our helpline. Walk-ins are also welcome.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">Do you provide transportation for donors?</h3>
              <p className="text-blue-800 text-sm">We provide free transportation for donors in emergency situations. Contact us for availability in your area.</p>
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">How can I volunteer with BloodConnect?</h3>
              <p className="text-blue-800 text-sm">We welcome volunteers! Contact us through the form above or call our helpline to learn about current volunteer opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;