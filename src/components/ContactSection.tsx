"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    urgency: "non-emergency",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Thank you for your message. We will contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      urgency: "non-emergency",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title="Contact Us" />
          <p className="md:text-lg text-gray-600">
            For emergencies, call our 24/7 hotline immediately. For
            non-emergency inquiries, reach us through other channels.
          </p>
        </div>

        <div className="">
          {/* Contact Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-500 text-white p-4 md:p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Emergency Hotline</h3>
                <div className="flex flex-col gap-2 md:text-xl">
                  <a href="tel:+91-9990228876" className="flex items-center hover:text-red-200">
                  <Phone className="w-6 h-6 mr-3" />
                    +91-9990228876
                  </a>
                  <a href="tel:+91-9540944424" className="flex items-center hover:text-red-200">
                  <Phone className="w-6 h-6 mr-3" />
                    +91-9540944424
                  </a>
                </div>
                <p className="mt-4 text-red-100 text-sm sm:text-lg">
                  Available 24/7 for all medical emergencies across India
                </p>
              </div>

              <div className="bg-white  p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Head Office
                    </h4>
                    <p className="text-gray-600">
                      E-18/280 GF, Sector 3, Rohini, Delhi 110085, <br />
                      Near MCD School India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white  p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Service Hours
                    </h4>
                    <p className="text-gray-600">
                      Emergency Services: 24/7
                      <br />
                      Office Hours: 10:00 AM - 6:00 PM
                      <br />
                      Customer Support: 24/7
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white  p-4 md:p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Email Support
                    </h4>
                    <p className="text-gray-600">jyotiambulance69@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Inquiry
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="emergency">Medical Emergency</option>
                  <option value="booking">Ambulance Booking</option>
                  <option value="non-emergency">General Inquiry</option>
                  <option value="feedback">Feedback/Complaint</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="+91-98765-43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-colors"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                ) : (
                  <Send className="w-5 h-5 mr-3" />
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {formData.urgency === 'emergency' && (
              <div className="mt-6 p-4 bg-red-100 border-l-4 border-red-600 rounded">
                <p className="text-red-800 font-medium">
                  ⚠️ For medical emergencies, please call our hotline immediately: 
                  <a href="tel:+919876543210" className="font-bold ml-2">+91-98765-43210</a>
                </p>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
