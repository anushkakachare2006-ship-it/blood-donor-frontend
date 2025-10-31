import React from 'react';
import { Heart, Droplets, Users, Shield, Clock, AlertCircle } from 'lucide-react';

const BloodInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Droplets className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Blood Information Center</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Learn everything you need to know about blood donation, blood types, components, and eligibility criteria
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blood Types Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blood Types & Compatibility</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">ABO Blood Group System</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold">Type A</h4>
                  <p className="text-gray-600">Has A antigens on red cells and anti-B antibodies in plasma</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold">Type B</h4>
                  <p className="text-gray-600">Has B antigens on red cells and anti-A antibodies in plasma</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold">Type AB</h4>
                  <p className="text-gray-600">Has both A and B antigens, no anti-A or anti-B antibodies (Universal Plasma Donor)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Type O</h4>
                  <p className="text-gray-600">Has no A or B antigens, has both anti-A and anti-B antibodies (Universal Red Cell Donor)</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Rh Factor</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold">Rh Positive (+)</h4>
                  <p className="text-gray-600">Has Rh antigens on red blood cells (85% of population)</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold">Rh Negative (-)</h4>
                  <p className="text-gray-600">Does not have Rh antigens on red blood cells (15% of population)</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Note</h4>
                    <p className="text-yellow-700 text-sm">Rh-negative individuals can only receive Rh-negative blood, while Rh-positive individuals can receive both Rh-positive and Rh-negative blood.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blood Components Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blood Components</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-600">Red Blood Cells</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Carry oxygen throughout the body</li>
                <li>• Contain hemoglobin protein</li>
                <li>• Lifespan: 120 days</li>
                <li>• Used for: Anemia, blood loss, surgery</li>
                <li>• Storage: 42 days refrigerated</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-yellow-600">Plasma</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Liquid portion of blood (55%)</li>
                <li>• Contains proteins and antibodies</li>
                <li>• Helps with clotting</li>
                <li>• Used for: Burn victims, trauma</li>
                <li>• Storage: 1 year frozen</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600">Platelets</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Help blood clot</li>
                <li>• Prevent bleeding</li>
                <li>• Lifespan: 7-10 days</li>
                <li>• Used for: Cancer patients, surgery</li>
                <li>• Storage: 5 days at room temperature</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Donation Eligibility Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Donation Eligibility Criteria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Basic Requirements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Age: 18-65 years (first-time donors), up to 70 years (regular donors)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Weight: Minimum 50 kg (110 lbs)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Hemoglobin: Minimum 12.5 g/dL</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Blood pressure: 120-180 systolic, 60-100 diastolic</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Pulse: 50-100 beats per minute</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span>Temperature: Normal (not exceeding 37.5°C)</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-orange-600 flex items-center">
                <Clock className="h-6 w-6 mr-2" />
                Waiting Periods
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>Between donations: 56 days (8 weeks)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>After vaccination: 1-4 weeks (varies by vaccine)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>After dental work: 24 hours (routine cleaning)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>After tattoo/piercing: 6 months</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>After travel to malaria areas: 3 years</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                  <span>After pregnancy: 6 months post-delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temporary Deferrals Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Temporary Deferrals</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Medical Conditions</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cold, flu, or fever</li>
                  <li>• Recent surgery or hospitalization</li>
                  <li>• Taking antibiotics</li>
                  <li>• Recent blood transfusion</li>
                  <li>• Pregnancy or breastfeeding</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Lifestyle Factors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Alcohol consumption (24 hours)</li>
                  <li>• Recent travel to certain areas</li>
                  <li>• High-risk activities</li>
                  <li>• Certain medications</li>
                  <li>• Recent immunizations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Donation Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Donation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Registration</h3>
              <p className="text-gray-600 text-sm">Complete donor registration form and provide ID</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Health Screening</h3>
              <p className="text-gray-600 text-sm">Medical history review and mini-physical exam</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Donation</h3>
              <p className="text-gray-600 text-sm">Blood collection process (8-10 minutes)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Recovery</h3>
              <p className="text-gray-600 text-sm">Rest and refreshments (10-15 minutes)</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-xl mb-6 text-red-100">
            One donation can save up to three lives. Join our community of heroes today.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Register as Donor
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Find Blood Drive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodInfo;