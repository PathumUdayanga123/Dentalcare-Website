import React, { Children } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import DentistCard from '../components/ui/DentistCard';
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
const About = () => {
  const clinicImages = ['https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'];
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">About DentalCare</h1>
            <p className="text-lg text-gray-600">
              Get to know our clinic and the dedicated team behind your healthy
              smiles.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeIn}>
              <img src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="DentalCare team" className="rounded-standard shadow-soft w-full" />
            </motion.div>
            <motion.div className="md:w-1/2" initial="hidden" whileInView="visible" viewport={{
            once: true
          }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                DentalCare was founded in 2005 with a simple mission: to provide
                exceptional dental care in a comfortable and welcoming
                environment. Since then, we have grown to become one of the most
                trusted dental clinics in the region.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced dentists and friendly staff are
                dedicated to ensuring that each patient receives personalized
                care tailored to their unique needs. We use the latest
                technology and techniques to deliver the best possible outcomes
                for our patients.
              </p>
              <p className="text-gray-600">
                At DentalCare, we believe that a healthy smile is essential to
                overall well-being. That's why we are committed to helping our
                patients achieve and maintain optimal oral health through
                preventive care, education, and treatment when necessary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div className="bg-white p-8 rounded-standard shadow-soft" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide exceptional dental care that improves the oral health
                and enhances the quality of life for our patients. We are
                committed to delivering personalized treatment in a comfortable,
                caring environment using the latest techniques and technology.
              </p>
            </motion.div>
            <motion.div className="bg-white p-8 rounded-standard shadow-soft" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the dental practice of choice in our community, recognized
                for our clinical excellence, exceptional patient care, and
                positive impact on oral health. We strive to create lasting
                relationships with our patients built on trust, respect, and
                outstanding service.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Meet Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Meet Our Team" subtitle="Our team of experienced dental professionals is dedicated to providing you with the best care." center />
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
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. Sarah Johnson" role="Cosmetic Dentist" image="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="Cosmetic Dentistry" experience="8 years" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. Michael Brown" role="Periodontist" image="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="Periodontics" experience="14 years" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <DentistCard name="Dr. Emily Rodriguez" role="Endodontist" image="https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" specialty="Endodontics" experience="9 years" />
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Clinic Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Clinic" subtitle="Take a virtual tour of our modern dental facility designed with your comfort in mind." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {clinicImages.map((image, index) => <motion.div key={index} variants={fadeIn} className="overflow-hidden rounded-standard shadow-soft">
                <img src={image} alt={`Clinic interior ${index + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>)}
          </motion.div>
        </div>
      </section>
    </div>;
};
export default About;