import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="font-bold text-xl">
                Blood<span className="text-red-600">Connect</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting blood donors with those in need. Our platform makes blood donation easy, 
              efficient, and accessible for everyone. Join our mission to save lives through 
              voluntary blood donation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white transition-colors">Become a Donor</Link></li>
              <li><Link to="/request" className="text-gray-300 hover:text-white transition-colors">Request Blood</Link></li>
              <li><Link to="/blood-info" className="text-gray-300 hover:text-white transition-colors">Blood Information</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-red-500" />
                <span className="text-gray-300 text-sm">
                  DY Patil Institute of Technology<br />
                  Pimpri, Pune, Maharashtra 411018
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-red-500" />
                <a href="mailto:anushkakachare2012@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  anushkakachare2012@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-500" />
                <span className="text-gray-300 text-sm">+91-020-2742-8888</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 BloodConnect. All rights reserved. Developed by Team BloodConnect.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;