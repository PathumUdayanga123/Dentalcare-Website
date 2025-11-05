import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smile, Sparkles, Stethoscope, Clock, Users, Shield, Baby, Heart } from 'lucide-react';
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
const ServiceCard = ({
  icon: Icon,
  title,
  description
}) => <motion.div variants={fadeIn} className="bg-white rounded-standard p-8 shadow-soft hover:shadow-md transition-all duration-300">
    <div className="bg-secondary p-4 rounded-full inline-flex mb-6">
      <Icon size={28} className="text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <Link to="/appointment">
      <Button size="small">Book Appointment</Button>
    </Link>
  </motion.div>;
const Services = () => {
  const services = [{
    icon: Smile,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and routine check-ups to maintain your oral health.'
  }, {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic services including teeth whitening, veneers, and smile makeovers.'
  }, {
    icon: Stethoscope,
    title: 'Orthodontics',
    description: 'Straighten your teeth and correct bite issues with braces, Invisalign, and other orthodontic treatments.'
  }, {
    icon: Baby,
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment that makes dental visits fun and comfortable.'
  }, {
    icon: Shield,
    title: 'Preventive Care',
    description: 'Protect your teeth with preventive treatments including sealants, fluoride applications, and oral hygiene education.'
  }, {
    icon: Users,
    title: 'Family Dentistry',
    description: 'Dental care for the whole family in one convenient location with appointment times that work for you.'
  }, {
    icon: Heart,
    title: 'Restorative Dentistry',
    description: 'Restore damaged or missing teeth with crowns, bridges, implants, and full or partial dentures.'
  }, {
    icon: Clock,
    title: 'Emergency Dental Care',
    description: 'Immediate care for dental emergencies such as toothaches, broken teeth, or other urgent dental problems.'
  }];
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Our Dental Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive dental care for you and your family
            </p>
          </motion.div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Services We Offer" subtitle="We provide a wide range of dental services to meet all your oral health needs." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />)}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Visit?
            </h2>
            <p className="text-lg mb-8">
              Book your appointment today and take the first step towards a
              healthier smile.
            </p>
            <Link to="/appointment">
              <Button variant="secondary" size="large">
                Book Appointment Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Why Choose Our Dental Clinic" subtitle="We're committed to providing the best dental care experience for our patients." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div className="text-center p-6" variants={fadeIn}>
              <div className="bg-secondary p-4 rounded-full inline-flex mb-4">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Our dentists have years of experience and stay current with the
                latest dental techniques.
              </p>
            </motion.div>
            <motion.div className="text-center p-6" variants={fadeIn}>
              <div className="bg-secondary p-4 rounded-full inline-flex mb-4">
                <Sparkles size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
              <p className="text-gray-600">
                We use advanced dental technology to provide efficient and
                comfortable treatments.
              </p>
            </motion.div>
            <motion.div className="text-center p-6" variants={fadeIn}>
              <div className="bg-secondary p-4 rounded-full inline-flex mb-4">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Patient-Centered Care
              </h3>
              <p className="text-gray-600">
                We prioritize your comfort and tailor our services to meet your
                individual needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Services;