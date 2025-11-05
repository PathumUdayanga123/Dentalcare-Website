import React, { useState, Children, lazy } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
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
const staggerContainer = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      name: '',
      email: '',
      message: ''
    });
  };
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Get in touch with our friendly team.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <motion.div className="lg:w-1/3" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeIn}>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Dental Street, Colombo, Sri Lanka
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Number</h3>
                    <a href="tel:+94XXXXXXXXX" className="text-gray-600 hover:text-primary transition-colors">
                      +94 XXXXXXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Address</h3>
                    <a href="mailto:clinic@example.com" className="text-gray-600 hover:text-primary transition-colors">
                      clinic@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div className="lg:w-2/3" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeIn}>
              {submitted ? <div className="bg-green-50 p-8 rounded-standard text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-green-700 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-600 mb-6">
                    Your message has been sent successfully. We'll get back to
                    you as soon as possible.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div> : <>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Your Name *
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address *
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-standard focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>
                    <div>
                      <Button type="submit">Send Message</Button>
                    </div>
                  </form>
                </>}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Location" subtitle="Find us easily with the map below" center />
          <div className="h-96 rounded-standard overflow-hidden shadow-soft">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585989223!2d79.8023882!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1656530893912!5m2!1sen!2sus" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Dental Clinic Location"></iframe>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;