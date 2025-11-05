import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smile, Sparkles, Stethoscope, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import DentistCard from '../components/ui/DentistCard';
import SectionTitle from '../components/ui/SectionTitle';
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
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div className="md:w-1/2 mb-10 md:mb-0" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Your Trusted Dental Care for a Brighter Smile.
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                We provide exceptional dental care with a gentle touch. Your
                comfort and oral health are our top priorities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/appointment">
                  <Button size="large">Book Appointment</Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="large">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div className="md:w-1/2" initial="hidden" animate="visible" variants={fadeIn}>
              <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Smiling dental patient" className="rounded-standard shadow-soft w-full" />
            </motion.div>
          </div>
        </div>
      </section>
      {/* About Clinic Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn}>
            <SectionTitle title="About Our Clinic" subtitle="DentalCare is a modern dental clinic dedicated to providing high-quality dental services in a comfortable and relaxing environment." center />
            <p className="text-gray-600 mb-8">
              Our team of experienced dentists and friendly staff are committed
              to ensuring you receive personalized care and treatment. We use
              the latest technology and techniques to deliver the best possible
              outcomes for our patients.
            </p>
            <Link to="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Services" subtitle="We offer a comprehensive range of dental services to meet all your oral health needs." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div variants={fadeIn}>
              <ServiceCard icon={Smile} title="Teeth Cleaning" description="Professional cleaning to remove plaque and tartar for a healthier mouth." />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard icon={Sparkles} title="Teeth Whitening" description="Get a brighter, whiter smile with our professional whitening treatments." />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard icon={Stethoscope} title="Dental Implants" description="Replace missing teeth with natural-looking and functioning implants." />
            </motion.div>
            <motion.div variants={fadeIn}>
              <ServiceCard icon={Clock} title="Emergency Care" description="Immediate care for dental emergencies when you need it most." />
            </motion.div>
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Our Patients Say" subtitle="Don't just take our word for it. See what our patients have to say about their experience with us." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div variants={fadeIn}>
              <TestimonialCard name="Sarah Johnson" rating={5} testimonial="The best dental experience I've ever had! Dr. Smith was gentle and explained everything clearly. The staff was friendly and the office is beautiful." />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard name="Michael Chen" rating={5} testimonial="I was nervous about my root canal, but the team made me feel comfortable and the procedure was painless. Highly recommend!" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <TestimonialCard name="Emily Rodriguez" rating={4} testimonial="My children love coming here for their checkups. The pediatric dentist is amazing with kids and makes the experience fun for them." />
            </motion.div>
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/testimonials">
              <Button variant="outline">Read More Testimonials</Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Meet Our Dentists */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Meet Our Dentists" subtitle="Our team of experienced dental professionals is dedicated to providing you with the best care." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. James Wilson" role="General Dentist" image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="General Dentistry" experience="15 years" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. Lisa Chen" role="Orthodontist" image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="Orthodontics" experience="12 years" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. Robert Taylor" role="Pediatric Dentist" image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="Pediatric Dentistry" experience="10 years" />
            </motion.div>
          </motion.div>
          <div className="text-center mt-10">
            <Link to="/about">
              <Button variant="outline">Meet Our Full Team</Button>
            </Link>
          </div>
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
    </div>;
};
export default Home;