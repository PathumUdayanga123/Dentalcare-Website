import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">DentalCare</h3>
            <p className="text-gray-600 mb-4">
              Your Trusted Dental Care Partner For a Brighter Smile and
              Healthier Life.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="text-gray-600 hover:text-primary transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-600">
                  123 Dental Street, Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="tel:0741986252" className="text-gray-600 hover:text-primary transition-colors">
                  0741986252
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary mr-2 flex-shrink-0" />
                <a href="mailto:clinic@example.com" className="text-gray-600 hover:text-primary transition-colors">
                  clinic@example.com
                </a>
              </li>
            </ul>
          </div>
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Working Hours
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-800 font-medium">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Saturday</p>
                  <p className="text-gray-800 font-medium">9:00 AM - 3:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">Sunday</p>
                  <p className="text-gray-800 font-medium">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-12 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} DentalCare. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;