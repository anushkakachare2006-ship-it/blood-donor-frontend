import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      category: 'donation',
      question: 'Why should I donate blood?',
      answer: 'Blood donation is a noble act that saves lives. One unit of blood can save up to three lives. It also provides health benefits to donors including free health checkup, reduced risk of heart disease, and the satisfaction of helping others in need.'
    },
    {
      id: 2,
      category: 'registration',
      question: 'How do I register as a blood donor?',
      answer: 'You can register as a blood donor through our website by filling out the donor registration form. You need to provide basic personal information, medical history, and contact details. The process takes about 5-10 minutes and you will receive a confirmation email once registered.'
    },
    {
      id: 3,
      category: 'process',
      question: 'What happens after I register as a donor?',
      answer: 'After registration, you become part of our donor database. When there is a blood requirement matching your blood type and location, we will contact you via SMS or phone call. You can choose to donate based on your availability and convenience.'
    },
    {
      id: 4,
      category: 'security',
      question: 'How is my data kept secure?',
      answer: 'We take data security very seriously. Your personal information is encrypted and stored securely. We only share your contact information with authorized medical professionals when there is a blood requirement. We never sell or misuse your personal data.'
    },
    {
      id: 5,
      category: 'donation',
      question: 'Who can donate blood?',
      answer: 'Anyone between 18-65 years old, weighing at least 50kg, and in good health can donate blood. You should not have donated blood in the last 3 months and should not have any infectious diseases or serious medical conditions.'
    },
    {
      id: 6,
      category: 'process',
      question: 'How often can I donate blood?',
      answer: 'You can donate whole blood every 3 months (12 weeks). For platelets, you can donate every 2 weeks, and for plasma every 4 weeks. This waiting period allows your body to replenish the donated blood components safely.'
    },
    {
      id: 7,
      category: 'donation',
      question: 'Does blood donation hurt?',
      answer: 'Blood donation involves a small needle prick which may cause mild discomfort for a few seconds. Most donors describe it as a brief pinch. The entire donation process is relatively painless and takes only 10-12 minutes.'
    },
    {
      id: 8,
      category: 'process',
      question: 'What should I do before donating blood?',
      answer: 'Get a good nights sleep, eat a healthy meal 2-3 hours before donation, drink plenty of water, avoid alcohol and smoking, bring a valid ID, and wear comfortable clothing with sleeves that can be rolled up easily.'
    },
    {
      id: 9,
      category: 'process',
      question: 'What should I do after donating blood?',
      answer: 'Rest for 10-15 minutes after donation, drink extra fluids for the next 24 hours, avoid heavy lifting or vigorous exercise for the day, eat iron-rich foods, and keep the bandage on for 4-6 hours.'
    },
    {
      id: 10,
      category: 'donation',
      question: 'Are there any side effects of blood donation?',
      answer: 'Most people have no side effects. Some may experience mild dizziness, fatigue, or slight bruising at the needle site. These are temporary and resolve quickly. Serious side effects are very rare when proper procedures are followed.'
    },
    {
      id: 11,
      category: 'registration',
      question: 'Can I update my information after registering?',
      answer: 'Yes, you can update your information by contacting us through our website or helpline. Its important to keep your contact information current so we can reach you when blood is needed.'
    },
    {
      id: 12,
      category: 'security',
      question: 'Will I receive spam calls or messages?',
      answer: 'No, we only contact registered donors for blood donation requests or important health-related information. We have strict policies against spam and unwanted communications. You can opt out of non-emergency communications at any time.'
    },
    {
      id: 13,
      category: 'donation',
      question: 'Can I donate if I have tattoos or piercings?',
      answer: 'You can donate blood 6 months after getting a tattoo or piercing, provided it was done at a licensed facility with sterile equipment. This waiting period ensures there is no risk of blood-borne infections.'
    },
    {
      id: 14,
      category: 'process',
      question: 'What blood tests are done on donated blood?',
      answer: 'All donated blood is tested for blood type (ABO and Rh), and screened for infectious diseases including HIV, Hepatitis B and C, Syphilis, and other transmissible infections. Only safe blood is used for transfusion.'
    },
    {
      id: 15,
      category: 'registration',
      question: 'Is there a cost to register as a donor?',
      answer: 'No, registration as a blood donor is completely free. Blood donation is a voluntary service and we never charge donors for registration, donation, or any related services.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', count: faqs.length },
    { id: 'donation', name: 'Blood Donation', count: faqs.filter(faq => faq.category === 'donation').length },
    { id: 'registration', name: 'Registration', count: faqs.filter(faq => faq.category === 'registration').length },
    { id: 'process', name: 'Process & Safety', count: faqs.filter(faq => faq.category === 'process').length },
    { id: 'security', name: 'Data Security', count: faqs.filter(faq => faq.category === 'security').length }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-red-600 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about blood donation, registration process, 
            and our platform. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <p className="text-gray-500">No questions found matching your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="mt-4 text-red-600 hover:text-red-700 font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openItem === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Still Have Questions?</h2>
          <p className="text-red-700 mb-6">
            Our support team is available 24/7 to help you with any questions about blood donation, 
            registration, or our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="tel:+91-020-2742-8888"
              className="border-2 border-red-600 text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Call: +91-020-2742-8888
            </a>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-4">Quick Tips for Blood Donors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">Before Donation:</h4>
              <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
                <li>Eat a healthy meal</li>
                <li>Stay hydrated</li>
                <li>Get adequate sleep</li>
                <li>Bring valid ID</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-blue-800">After Donation:</h4>
              <ul className="text-blue-700 text-sm space-y-1 list-disc list-inside">
                <li>Rest for 15 minutes</li>
                <li>Drink plenty of fluids</li>
                <li>Avoid heavy lifting</li>
                <li>Eat iron-rich foods</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;