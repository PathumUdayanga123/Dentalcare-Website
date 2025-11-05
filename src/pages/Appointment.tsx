import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
const Appointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, you would send this data to your backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      message: ''
    });
  };
  const services = ['General Check-up', 'Teeth Cleaning', 'Teeth Whitening', 'Fillings', 'Root Canal', 'Extractions', 'Braces/Orthodontics', 'Implants', 'Emergency Care', 'Other'];
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-lg text-gray-600">
              Schedule your visit with our dental professionals
            </p>
          </motion.div>
        </div>
      </section>
      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {submitted ? <motion.div className="bg-green-50 p-8 rounded-standard text-center" initial="hidden" animate="visible" variants={fadeIn}>
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-600 mb-6">
                  Your appointment request has been submitted successfully.
                  We'll contact you shortly to confirm your appointment.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                  Book Another Appointment
                </Button>
              </motion.div> : <>
                <SectionTitle title="Request an Appointment" subtitle="Fill out the form below to request an appointment with one of our dental professionals." center />
                <motion.form onSubmit={handleSubmit} className="bg-white p-8 rounded-standard shadow-soft" initial="hidden" animate="visible" variants={fadeIn}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Full Name *
                      </label>
                      <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        Type of Service *
                      </label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select a service</option>
                        {services.map((service, index) => <option key={index} value={service}>
                            {service}
                          </option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                        Preferred Date *
                      </label>
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                        Preferred Time *
                      </label>
                      <select id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary">
                        <option value="">Select a time</option>
                        <option value="Morning">
                          Morning (8:00 AM - 12:00 PM)
                        </option>
                        <option value="Afternoon">
                          Afternoon (12:00 PM - 4:00 PM)
                        </option>
                        <option value="Evening">
                          Evening (4:00 PM - 6:00 PM)
                        </option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Additional Information
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Please share any specific concerns or questions you have."></textarea>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button type="submit" fullWidth>
                      Submit Appointment Request
                    </Button>
                  </div>
                </motion.form>
              </>}
            {/* Alternative Contact Methods */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-center mb-8">
                Or Book Via
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a href="mailto:clinic@example.com?subject=Book Appointment&body=Hi, I'd like to book an appointment on [date] for [service]." className="flex flex-col items-center p-6 bg-white rounded-standard shadow-soft hover:shadow-md transition-all duration-300">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Book via Email</h4>
                  <p className="text-gray-600 text-center">
                    Send us an email with your preferred date and service
                  </p>
                </a>
                <a href="https://wa.me/94XXXXXXXXX?text=Hi, I'd like to book a dental appointment on [date] for [service]." target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-standard shadow-soft hover:shadow-md transition-all duration-300">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Book via WhatsApp</h4>
                  <p className="text-gray-600 text-center">
                    Send us a message on WhatsApp for quick booking
                  </p>
                </a>
                <a href="tel:+94XXXXXXXXX" className="flex flex-col items-center p-6 bg-white rounded-standard shadow-soft hover:shadow-md transition-all duration-300">
                  <div className="bg-secondary p-4 rounded-full mb-4">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Call Now</h4>
                  <p className="text-gray-600 text-center">
                    Call us directly to speak with our staff
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Appointment;