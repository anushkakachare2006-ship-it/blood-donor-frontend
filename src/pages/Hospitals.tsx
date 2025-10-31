import React from 'react';
import { MapPin, Phone, Clock, Mail, Star, Bed, Users, Award } from 'lucide-react';

const Hospitals = () => {
  const hospitals = [
    {
      name: 'DY Patil Medical College and Hospital',
      address: 'Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018',
      phone: '+91-020-2742-8888',
      email: 'info@dypatilinstitute.org',
      website: 'www.dypatilinstitute.org',
      emergency: '+91-020-2742-8800',
      timings: {
        opd: '8:00 AM - 8:00 PM',
        emergency: '24 hours',
        bloodBank: '24 hours'
      },
      specialties: [
        'Cardiology', 'Neurology', 'Orthopedics', 'Oncology', 'Pediatrics', 
        'Emergency Medicine', 'Trauma Care', 'Critical Care'
      ],
      facilities: [
        'Blood Bank', 'ICU', 'NICU', 'Operation Theaters', 'Dialysis Center',
        'Radiology', 'Laboratory', 'Pharmacy', 'Ambulance Service'
      ],
      stats: {
        beds: '500+',
        doctors: '200+',
        rating: '4.2'
      },
      bloodServices: {
        available: true,
        types: ['Whole Blood', 'Platelets', 'Plasma', 'RBC'],
        emergencySupport: true,
        donationCenter: true
      },
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Tapovan Multispeciality Hospital',
      address: 'PCMC, Pune, Maharashtra 411033',
      phone: '+91-020-2748-9900',
      email: 'info@tapovanhospital.com',
      website: 'www.tapovanhospital.com',
      emergency: '+91-020-2748-9911',
      timings: {
        opd: '9:00 AM - 7:00 PM',
        emergency: '24 hours',
        bloodBank: '6:00 AM - 10:00 PM'
      },
      specialties: [
        'Internal Medicine', 'General Surgery', 'Gynecology', 'Pediatrics',
        'Dermatology', 'ENT', 'Psychiatry', 'Physiotherapy'
      ],
      facilities: [
        'Blood Bank', 'ICU', 'Operation Theaters', 'Laboratory',
        'Radiology', 'Pharmacy', 'Emergency Care', 'Ambulance Service'
      ],
      stats: {
        beds: '150+',
        doctors: '80+',
        rating: '4.0'
      },
      bloodServices: {
        available: true,
        types: ['Whole Blood', 'Platelets', 'Plasma'],
        emergencySupport: true,
        donationCenter: true
      },
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Jeevanjyoti Super-Speciality Hospital',
      address: 'Pimple Saudagar, PCMC, Pune, Maharashtra 411027',
      phone: '+91-020-2746-7700',
      email: 'info@jeevanjyoti.org',
      website: 'www.jeevanjyoti.org',
      emergency: '+91-020-2746-7777',
      timings: {
        opd: '8:00 AM - 8:00 PM',
        emergency: '24 hours',
        bloodBank: '24 hours'
      },
      specialties: [
        'Cardiac Surgery', 'Neurosurgery', 'Kidney Transplant', 'Liver Transplant',
        'Cancer Treatment', 'Intensive Care', 'Emergency Medicine', 'Trauma Surgery'
      ],
      facilities: [
        'Blood Bank', 'Multiple ICUs', 'CATH Lab', 'Operation Theaters',
        'Transplant Center', 'Cancer Center', 'Dialysis Unit', 'Emergency Department'
      ],
      stats: {
        beds: '300+',
        doctors: '150+',
        rating: '4.5'
      },
      bloodServices: {
        available: true,
        types: ['Whole Blood', 'Platelets', 'Plasma', 'RBC', 'Specialized Components'],
        emergencySupport: true,
        donationCenter: true
      },
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Partner Hospitals & Medical Centers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our network of trusted healthcare institutions providing quality medical care 
            and blood banking services across Pune region.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-4">
            <Phone className="h-6 w-6 text-red-600" />
            <div className="text-center">
              <p className="font-semibold text-red-900">Emergency Blood Support</p>
              <p className="text-red-700">For urgent blood requirements, call: <span className="font-bold">+91-020-2742-8888</span></p>
            </div>
          </div>
        </div>

        {/* Hospitals Grid */}
        <div className="space-y-8">
          {hospitals.map((hospital, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="lg:flex">
                {/* Image */}
                <div className="lg:w-1/3">
                  <img 
                    src={hospital.image} 
                    alt={hospital.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{hospital.name}</h2>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{hospital.stats.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Bed className="h-4 w-4" />
                          <span>{hospital.stats.beds} beds</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{hospital.stats.doctors} doctors</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Verified Partner
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                        <p className="text-gray-700 text-sm">{hospital.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-red-600" />
                        <a href={`tel:${hospital.phone}`} className="text-red-600 hover:text-red-700 font-medium text-sm">
                          {hospital.phone}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-red-600" />
                        <span className="text-sm text-gray-600">Emergency: </span>
                        <a href={`tel:${hospital.emergency}`} className="text-red-600 hover:text-red-700 font-bold text-sm">
                          {hospital.emergency}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-red-600" />
                        <a href={`mailto:${hospital.email}`} className="text-red-600 hover:text-red-700 text-sm">
                          {hospital.email}
                        </a>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Clock className="h-4 w-4 text-red-600 mt-1" />
                        <div className="text-sm">
                          <p className="text-gray-700"><span className="font-medium">OPD:</span> {hospital.timings.opd}</p>
                          <p className="text-gray-700"><span className="font-medium">Emergency:</span> {hospital.timings.emergency}</p>
                          <p className="text-gray-700"><span className="font-medium">Blood Bank:</span> {hospital.timings.bloodBank}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blood Services */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Award className="h-5 w-5 text-red-600 mr-2" />
                      Blood Banking Services
                    </h3>
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-red-800 mb-1">Available Blood Types:</p>
                          <div className="flex flex-wrap gap-1">
                            {hospital.bloodServices.types.map((type, i) => (
                              <span key={i} className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          {hospital.bloodServices.emergencySupport && (
                            <p className="text-sm text-red-700">✓ 24/7 Emergency Blood Support</p>
                          )}
                          {hospital.bloodServices.donationCenter && (
                            <p className="text-sm text-red-700">✓ Blood Donation Center Available</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Medical Specialties</h3>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Key Facilities</h3>
                    <div className="flex flex-wrap gap-2">
                      {hospital.facilities.map((facility, i) => (
                        <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs">
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Important Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Emergency Protocol</h3>
              <p className="text-blue-800 text-sm">
                For life-threatening emergencies requiring immediate blood, 
                call the hospital emergency numbers directly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Quality Assurance</h3>
              <p className="text-blue-800 text-sm">
                All partner hospitals are accredited and follow 
                international standards for blood banking and patient care.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-blue-900 mb-2">Location Coverage</h3>
              <p className="text-blue-800 text-sm">
                Our partner network covers Pune and PCMC areas, 
                ensuring accessible healthcare for all residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;