import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your BloodConnect assistant. I can help you with questions about blood donation, eligibility, blood types, and our services. How can I help you today?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const predefinedResponses = {
    'who can donate blood': 'Anyone between 18-65 years old, weighing at least 50kg, and in good health can donate blood. You should not have donated blood in the last 3 months.',
    'blood types': 'There are 8 main blood types: A+, A-, B+, B-, AB+, AB-, O+, and O-. O- is the universal donor, and AB+ is the universal receiver.',
    'donation process': 'The donation process includes: 1) Registration and health screening, 2) Mini health checkup, 3) Blood donation (10-12 minutes), 4) Rest and refreshments. The entire process takes about 30-45 minutes.',
    'eligibility criteria': 'You must be 18-65 years old, weigh at least 50kg, be in good health, not have donated blood in the last 3 months, and not have any infections or recent medications.',
    'how often donate': 'You can donate blood every 3 months (12 weeks). This allows your body to replenish the donated blood cells.',
    'benefits of donating': 'Benefits include: Free health checkup, helping save lives, priority support when you need blood, and health benefits like reduced risk of heart disease.',
    'preparation before donation': 'Get a good night sleep, eat iron-rich foods, drink plenty of water, avoid alcohol and smoking, and bring a valid ID.',
    'after donation care': 'Rest for 10-15 minutes, drink plenty of fluids, avoid heavy lifting for 24 hours, eat iron-rich foods, and keep the bandage on for 4-6 hours.',
    'blood components': 'Blood has 4 main components: Red Blood Cells (carry oxygen), White Blood Cells (fight infections), Platelets (help clotting), and Plasma (carries nutrients).',
    'contact': 'You can reach us at +91-020-2742-8888 (24/7 emergency helpline) or email anushkakachare2012@gmail.com',
    'locations': 'We partner with DY Patil Medical College Hospital, Tapovan Multispeciality Hospital, and Jeevanjyoti Super-Speciality Hospital in Pune.',
    'emergency blood': 'For emergency blood requirements, call our 24/7 helpline at +91-020-2742-8888 or use our urgent blood request form on the website.'
  };

  const quickReplies = [
    'Who can donate blood?',
    'Blood types information',
    'Donation process',
    'How to prepare for donation',
    'Contact information',
    'Emergency blood request'
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Find matching response
    const lowerInput = inputText.toLowerCase();
    let botResponse = "I understand you're asking about blood donation. Here are some common topics I can help with:\n\n• Blood donation eligibility\n• Blood types and compatibility\n• Donation process and preparation\n• After-care instructions\n• Emergency blood requests\n• Contact information\n\nPlease ask about any of these topics, and I'll provide detailed information!";

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-50 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot size={20} />
              <div>
                <h3 className="font-semibold">BloodConnect Assistant</h3>
                <p className="text-xs text-red-100">Online - Ask me anything!</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-red-600 text-white'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="p-2 border-t border-gray-200">
            <div className="flex flex-wrap gap-1 mb-2">
              {quickReplies.slice(0, 3).map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;