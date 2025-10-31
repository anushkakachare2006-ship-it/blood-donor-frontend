import React, { useState } from 'react';
import { AlertTriangle, Phone, Clock, MapPin, User } from 'lucide-react';
import { apiService, BloodRequestData } from '../services/apiService.mock';

const RequestBlood = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    bloodGroup: '',
    unitsNeeded: '',
    urgencyLevel: '',
    hospital: '',
    hospitalAddress: '',
    contactPerson: '',
    contactPhone: '',
    alternatePhone: '',
    requiredDate: '',
    medicalCondition: '',
    additionalNotes: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const urgencyLevels = [
    { value: 'critical', label: 'Critical (Within 2 hours)', color: 'text-red-600' },
    { value: 'urgent', label: 'Urgent (Within 6 hours)', color: 'text-orange-600' },
    { value: 'normal', label: 'Normal (Within 24 hours)', color: 'text-blue-600' }
  ];

  const hospitals = [
    'DY Patil Medical College and Hospital, Sant Tukaram Nagar, Pimpri, Pune',
    'Tapovan Multispeciality Hospital, PCMC, Pune',
    'Jeevanjyoti Super-Speciality Hospital, Pimple Saudagar, PCMC, Pune',
    'Other Hospital (Please specify in address field)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const requestData: BloodRequestData = {
        ...formData,
        patientAge: parseInt(formData.patientAge),
        unitsNeeded: parseInt(formData.unitsNeeded)
      };

      const response = await apiService.submitBloodRequest(requestData);
      
      if (response.success) {
        setSubmitMessage(response.message || 'Blood request submitted successfully! We are notifying nearby donors and blood banks.');
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            patientName: '',
            patientAge: '',
            bloodGroup: '',
            unitsNeeded: '',
            urgencyLevel: '',
            hospital: '',
            hospitalAddress: '',
            contactPerson: '',
            contactPhone: '',
            alternatePhone: '',
            requiredDate: '',
            medicalCondition: '',
            additionalNotes: '',
            agreeTerms: false
          });
          setSubmitMessage('');
        }, 3000);
      } else {
        setSubmitMessage(response.message || 'Failed to submit blood request. Please try again.');
      }
    } catch (error) {
      console.error('Blood request error:', error);
      setSubmitMessage('Failed to submit blood request. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 border-red-300 text-red-800';
      case 'urgent': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'normal': return 'bg-blue-100 border-blue-300 text-blue-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-red-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Request Blood
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need blood urgently? Fill out this form and we'll immediately notify nearby donors 
            and blood banks to help you get the blood you need.
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-center space-x-4 text-red-700">
            <Phone className="h-6 w-6" />
            <span className="font-semibold text-lg">Emergency Helpline: +91-020-2742-8888</span>
          </div>
          <p className="text-center text-red-600 mt-2">Available 24/7 for critical blood requirements</p>
        </div>

        {/* Request Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="h-6 w-6 text-red-600 mr-2" />
                Patient Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter patient's full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Age *
                  </label>
                  <input
                    type="number"
                    name="patientAge"
                    value={formData.patientAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Age"
                    min="1"
                    max="120"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Blood Group Required *
                  </label>
                  <select
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Blood Group</option>
                    {bloodGroups.map(group => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Units of Blood Needed *
                  </label>
                  <input
                    type="number"
                    name="unitsNeeded"
                    value={formData.unitsNeeded}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Number of units"
                    min="1"
                    max="10"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">1 unit = 350ml of blood</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    name="urgencyLevel"
                    value={formData.urgencyLevel}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Urgency Level</option>
                    {urgencyLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Date & Time *
                </label>
                <input
                  type="datetime-local"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>

              {formData.urgencyLevel && (
                <div className={`p-4 rounded-lg border ${getUrgencyColor(formData.urgencyLevel)}`}>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span className="font-semibold">
                      {urgencyLevels.find(l => l.value === formData.urgencyLevel)?.label}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Hospital Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-red-600 mr-2" />
                Hospital Information
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital *
                </label>
                <select
                  name="hospital"
                  value={formData.hospital}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Hospital</option>
                  {hospitals.map((hospital, index) => (
                    <option key={index} value={hospital}>{hospital}</option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hospital Address / Additional Details
                </label>
                <textarea
                  name="hospitalAddress"
                  value={formData.hospitalAddress}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Ward number, room number, or additional location details"
                ></textarea>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="h-6 w-6 text-red-600 mr-2" />
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Name of person to contact"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="+91 XXXXXXXXXX"
                    required
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alternate Contact Number
                </label>
                <input
                  type="tel"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>
            </div>

            {/* Medical Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Medical Information
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical Condition / Reason for Blood Need
                </label>
                <textarea
                  name="medicalCondition"
                  value={formData.medicalCondition}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Brief description of the medical condition (e.g., surgery, accident, cancer treatment)"
                ></textarea>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Any additional information that might help donors or blood banks"
                ></textarea>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mt-1 mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  required
                />
                <label className="text-sm text-gray-700">
                  I confirm that the information provided is accurate and I understand that this request 
                  will be shared with registered donors and blood banks. I agree to verify donor eligibility 
                  and follow all medical safety protocols. I also agree to the 
                  <a href="#" className="text-red-600 hover:underline"> Terms and Conditions</a> and 
                  <a href="#" className="text-red-600 hover:underline"> Privacy Policy</a>.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-200 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Blood Request'}
              </button>
              <p className="text-sm text-gray-500 mt-4">
                After submission, you'll receive SMS and email confirmations. 
                Donors and blood banks will be notified immediately.
              </p>
            </div>
          </form>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`mt-6 p-4 rounded-lg ${
              submitMessage.includes('successfully') 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <p className="font-medium">{submitMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;