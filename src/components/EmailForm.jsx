import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_33rluua";
const EMAILJS_TEMPLATE_ID = "template_kjiob5c";
const EMAILJS_PUBLIC_KEY = "N_j4lvD7bbtxyMbCz";

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendEmail = (templateParams) => {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY
  );
};

const EmailForm = ({ donorData, onEmailSent, onEmailError }) => {
  const [isSending, setIsSending] = useState(false);

  const sendDonorRegistrationEmail = async () => {
    setIsSending(true);
    
    try {
      const templateParams = {
        to_name: "BloodConnect Team",
        from_name: donorData.fullName,
        from_email: donorData.email,
        phone: donorData.phone,
        blood_group: donorData.bloodGroup,
        city: donorData.city,
        state: donorData.state,
        message: `New donor registration:
        
Name: ${donorData.fullName}
Email: ${donorData.email}
Phone: ${donorData.phone}
Blood Group: ${donorData.bloodGroup}
Age: ${donorData.age || 'Not provided'}
City: ${donorData.city}
State: ${donorData.state}
Address: ${donorData.address}
Emergency Contact: ${donorData.emergencyContact}
Emergency Phone: ${donorData.emergencyPhone}
Last Donation: ${donorData.lastDonation || 'Never donated before'}
Medical Conditions: ${donorData.medicalConditions || 'None reported'}

Registration Date: ${new Date().toLocaleString()}`,
        reply_to: donorData.email
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      
      if (onEmailSent) {
        onEmailSent(result);
      }
      
      return { success: true, result };
    } catch (error) {
      console.error('Email sending failed:', error);
      
      if (onEmailError) {
        onEmailError(error);
      }
      
      return { success: false, error };
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="email-form-component">
      <button
        onClick={sendDonorRegistrationEmail}
        disabled={isSending}
        className="hidden" // Hidden as this will be called programmatically
      >
        {isSending ? 'Sending Email...' : 'Send Email'}
      </button>
    </div>
  );
};

export default EmailForm;