import React, { useState } from 'react';
import { Star, Quote, Heart, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const Testimonials = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const successStories = [
    {
      id: 1,
      title: 'Life Saved Within Hours',
      patientName: 'Rajesh Kumar',
      age: 34,
      bloodType: 'O-',
      situation: 'Severe accident requiring emergency surgery',
      outcome: 'Full recovery after receiving 4 units of blood',
      story: 'After a serious motorcycle accident, I was rushed to DY Patil Hospital with severe blood loss. Thanks to BloodConnect, the hospital was able to find O- blood donors within 2 hours. The quick response saved my life. I am forever grateful to the donors and the BloodConnect team.',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: 'January 2025',
      hospital: 'DY Patil Medical College'
    },
    {
      id: 2,
      title: 'Cancer Treatment Success',
      patientName: 'Priya Sharma',
      age: 28,
      bloodType: 'A+',
      situation: 'Leukemia treatment requiring regular blood transfusions',
      outcome: 'Successfully completed treatment with 15 transfusions',
      story: 'During my leukemia treatment, I needed blood transfusions every few weeks. BloodConnect ensured that I never had to worry about blood availability. The donors were always there when I needed them most. Today, I am cancer-free and living a normal life.',
      image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: 'December 2024',
      hospital: 'Jeevanjyoti Hospital'
    },
    {
      id: 3,
      title: 'Safe Childbirth',
      patientName: 'Sunita Patel',
      age: 26,
      bloodType: 'B+',
      situation: 'Complications during childbirth',
      outcome: 'Healthy baby and mother after blood transfusion',
      story: 'I had unexpected complications during my delivery and lost a lot of blood. The doctors at Tapovan Hospital quickly contacted BloodConnect, and B+ blood was arranged within an hour. Both my baby and I are healthy now, thanks to the wonderful donors.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300',
      date: 'November 2024',
      hospital: 'Tapovan Hospital'
    }
  ];

  const donorTestimonials = [
    {
      id: 1,
      name: 'Dr. Amit Desai',
      profession: 'Cardiologist',
      bloodType: 'O+',
      donationCount: 25,
      testimonial: 'As a doctor, I understand the critical importance of blood availability. Donating through BloodConnect has been incredibly easy and rewarding. The platform connects me directly with patients who need my blood type.',
      image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5
    },
    {
      id: 2,
      name: 'Ravi Mehta',
      profession: 'Software Engineer',
      bloodType: 'A-',
      donationCount: 12,
      testimonial: 'Being an A- donor, I know how rare my blood type is. BloodConnect makes it so convenient to donate whenever there is a need. The SMS notifications are timely and the staff is always professional.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5
    },
    {
      id: 3,
      name: 'Sneha Joshi',
      profession: 'Teacher',
      bloodType: 'AB+',
      donationCount: 18,
      testimonial: 'I have been donating blood for 5 years now. BloodConnect has made the process so much smoother. I love knowing that my donations are helping real people in my community. The free health checkups are an added benefit.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5
    },
    {
      id: 4,
      name: 'Vikram Singh',
      profession: 'Police Officer',
      bloodType: 'B-',
      donationCount: 30,
      testimonial: 'In my line of work, I see how accidents can happen anytime. Being a blood donor gives me satisfaction that I am prepared to help. BloodConnect has organized everything perfectly - from registration to donation.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5
    }
  ];

  const statistics = [
    { number: '50,000+', label: 'Lives Touched', icon: Heart },
    { number: '25,000+', label: 'Successful Transfusions', icon: Users },
    { number: '98%', label: 'Patient Satisfaction', icon: Star },
    { number: '100+', label: 'Partner Hospitals', icon: Heart }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & Testimonials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from patients whose lives were saved and donors who made a difference. 
            These testimonials showcase the life-changing impact of our blood donation network.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:bg-red-100 transition-colors duration-300 mb-4">
                  <stat.icon className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories Carousel */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-red-600 text-white p-6">
            <h2 className="text-2xl font-bold text-center flex items-center justify-center">
              <Heart className="h-6 w-6 mr-2" />
              Patient Success Stories
            </h2>
          </div>
          
          <div className="relative">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevStory}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-600" />
                </button>
                
                <div className="flex space-x-2">
                  {successStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentStory ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextStory}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src={successStories[currentStory].image}
                    alt={successStories[currentStory].patientName}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {successStories[currentStory].title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span><strong>Patient:</strong> {successStories[currentStory].patientName}</span>
                      <span><strong>Age:</strong> {successStories[currentStory].age}</span>
                      <span><strong>Blood Type:</strong> {successStories[currentStory].bloodType}</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p><strong>Situation:</strong> {successStories[currentStory].situation}</p>
                      <p><strong>Outcome:</strong> {successStories[currentStory].outcome}</p>
                    </div>
                  </div>
                  
                  <Quote className="h-8 w-8 text-red-600 mb-4" />
                  <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-4">
                    "{successStories[currentStory].story}"
                  </blockquote>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{successStories[currentStory].hospital}</span>
                    <span>{successStories[currentStory].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donor Testimonials */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Donors Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donorTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <p>{testimonial.profession}</p>
                      <p>Blood Type: <span className="font-semibold text-red-600">{testimonial.bloodType}</span></p>
                      <p>Donations: <span className="font-semibold">{testimonial.donationCount}</span></p>
                    </div>
                    <Quote className="h-6 w-6 text-red-600 mb-2" />
                    <p className="text-gray-700 text-sm italic leading-relaxed">
                      "{testimonial.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Share Your Story</h2>
          <p className="text-red-700 mb-6 max-w-2xl mx-auto">
            Have you been helped by our blood donation network or are you a regular donor with a story to share? 
            We would love to hear from you and inspire others with your experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Share Your Story
            </button>
            <button className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200">
              Nominate Someone
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Be Part of Someone's Success Story</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every donation has the potential to save a life and create a success story. 
            Join our community of heroes and make a difference today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/register"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Become a Donor
            </a>
            <a
              href="/request"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Request Blood
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;