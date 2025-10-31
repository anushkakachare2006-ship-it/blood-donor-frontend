import React from 'react';
import { Heart, Users, Target, Award, Mail, Linkedin, Github } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Anushka Kachare',
      rollNo: 'SIT24',
      email: 'anushkakachare2012@gmail.com'
    },
    {
      name: 'Yogini Bhosale',
      rollNo: 'SIT16',
      email: 'yogini.bhosale@example.com'
    },
    {
      name: 'Disha Hulsure',
      rollNo: 'SIT18',
      email: 'disha.hulsure@example.com'
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '50,000+ Users',
      description: 'Registered donors and patients using our platform'
    },
    {
      icon: Heart,
      title: '25,000+ Lives Saved',
      description: 'Successful blood transfusions facilitated through our network'
    },
    {
      icon: Target,
      title: '100+ Hospitals',
      description: 'Partner hospitals and blood banks across the region'
    },
    {
      icon: Award,
      title: '98% Success Rate',
      description: 'Blood requests fulfilled within required timeframe'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">About BloodConnect</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              A community-driven platform connecting blood donors with those in need, 
              making blood donation accessible, efficient, and life-saving.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                BloodConnect was created to address the critical shortage and inefficient distribution 
                of blood donations in urban and semi-urban communities. Our mission is to streamline 
                the blood donation process, improve accessibility, and ensure timely availability of 
                blood for patients in need.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Through our centralized, user-friendly web-based platform, we connect blood donors, 
                recipients, and blood banks in real-time, creating a seamless network that saves lives 
                and builds stronger communities.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-semibold">
                  "Every drop counts, every donation matters. Together, we can save lives."
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Blood donation mission"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Making a difference in the community through technology and compassion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated computer engineering students from DY Patil Institute of Technology, 
              working together to create innovative solutions for healthcare challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-4">Roll No: {member.rollNo}</p>
                <p className="text-gray-700 mb-4">{member.email}</p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Project Title</h3>
                  <p className="text-gray-700">Life Drop: Blood Donation Platform</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Group ID</h3>
                  <p className="text-gray-700">CEIT2507</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Institution</h3>
                  <p className="text-gray-700">DY Patil Institute of Technology, Pimpri, Pune</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">Technologies Used</h3>
                  <p className="text-gray-700">HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Donor Matching</h3>
                    <p className="text-gray-600 text-sm">Instantly connect patients with compatible donors in their area</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Blood Bank Management</h3>
                    <p className="text-gray-600 text-sm">Comprehensive inventory tracking and donor history management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Response</h3>
                    <p className="text-gray-600 text-sm">24/7 emergency blood request system with rapid response</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Engagement</h3>
                    <p className="text-gray-600 text-sm">Educational resources and donation drive organization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
            Be part of a life-saving community. Whether you're a donor, patient, or healthcare provider, 
            together we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/register" 
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Become a Donor
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;