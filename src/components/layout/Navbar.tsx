import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);
  }, [location]);
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft' : 'bg-white'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick contact bar */}
        <div className="hidden md:flex justify-end py-2 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:0741986252" className="flex items-center text-gray-600 hover:text-primary transition-colors">
              <Phone size={14} className="mr-1" />
              <span>0741986252</span>
            </a>
            <a href="mailto:clinic@example.com" className="flex items-center text-gray-600 hover:text-primary transition-colors">
              <Mail size={14} className="mr-1" />
              <span>clinic@example.com</span>
            </a>
            <a href="https://wa.me/0741986252" className="flex items-center text-gray-600 hover:text-primary transition-colors">
              <MessageCircle size={14} className="mr-1" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            DentalCare
          </Link>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Link to="/appointment">
              <Button>Book Appointment</Button>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700 hover:text-primary" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary py-2 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Services
              </Link>
              <Link to="/testimonials" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Testimonials
              </Link>
              <Link to="/gallery" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Gallery
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary py-2 transition-colors">
                Contact
              </Link>
              <div className="pt-2">
                <Link to="/appointment" className="block w-full">
                  <Button fullWidth>Book Appointment</Button>
                </Link>
              </div>
              <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                <a href="tel:+94XXXXXXXXX" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Phone size={16} className="mr-2" />
                  <span>0741986252</span>
                </a>
                <a href="mailto:clinic@example.com" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <Mail size={16} className="mr-2" />
                  <span>clinic@example.com</span>
                </a>
                <a href="https://wa.me/0741986252" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                  <MessageCircle size={16} className="mr-2" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        </div>}
    </header>;
};
export default Navbar;