import React, { Children } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import TestimonialCard from '../components/ui/TestimonialCard';
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
const Testimonials = () => {
  const testimonials = [{
    name: 'Sarah Johnson',
    rating: 5,
    testimonial: "The best dental experience I've ever had! Dr. Smith was gentle and explained everything clearly. The staff was friendly and the office is beautiful. I no longer dread going to the dentist!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Michael Chen',
    rating: 5,
    testimonial: 'I was nervous about my root canal, but the team made me feel comfortable and the procedure was painless. Dr. Wilson is amazing and the front desk staff is so helpful with insurance questions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Emily Rodriguez',
    rating: 4,
    testimonial: 'My children love coming here for their checkups. The pediatric dentist is amazing with kids and makes the experience fun for them. The office has a great play area in the waiting room too!',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'David Thompson',
    rating: 5,
    testimonial: "After years of being embarrassed about my smile, Dr. Chen transformed it completely with veneers. The results are amazing and I can't stop smiling! Worth every penny.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Jennifer Williams',
    rating: 5,
    testimonial: 'The Invisalign treatment I received has completely changed my confidence. The team was supportive throughout the entire process and answered all my questions promptly.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Robert Garcia',
    rating: 4,
    testimonial: 'I had a dental emergency while visiting town and they fit me in the same day. Dr. Taylor was professional and fixed my broken crown quickly. Very grateful for their help!',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Lisa Anderson',
    rating: 5,
    testimonial: "I've been coming to DentalCare for over 5 years now. The hygienists are thorough but gentle, and Dr. Wilson always takes time to discuss any concerns I have. Highly recommend!",
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Mark Johnson',
    rating: 4,
    testimonial: 'The office uses the latest technology which makes the experience much more comfortable. Digital x-rays and the option to watch Netflix during longer procedures is a nice touch!',
    image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }, {
    name: 'Amanda Lee',
    rating: 5,
    testimonial: 'After a bad experience at another dental office, I was hesitant to try somewhere new. The team at DentalCare was understanding and patient. Now my whole family comes here!',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Patient Testimonials</h1>
            <p className="text-lg text-gray-600">
              Read what our patients have to say about their experience with us
            </p>
          </motion.div>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="What Our Patients Say" subtitle="We're proud to have helped so many patients achieve healthier, more beautiful smiles." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {testimonials.map((testimonial, index) => <motion.div key={index} variants={fadeIn}>
                <TestimonialCard name={testimonial.name} rating={testimonial.rating} testimonial={testimonial.testimonial} image={testimonial.image} />
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Before & After" subtitle="See the transformations we've helped our patients achieve" center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.div variants={fadeIn} className="bg-white rounded-standard overflow-hidden shadow-soft">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Teeth Whitening</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Professional whitening treatment
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <img src="https://images.unsplash.com/photo-1606429400-353e6ff3fedd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Before teeth whitening" className="rounded-standard" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <img src="https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="After teeth whitening" className="rounded-standard" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white rounded-standard overflow-hidden shadow-soft">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Invisalign</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Clear aligner treatment
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <img src="https://images.unsplash.com/photo-1595003680332-4e74cc000fa2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Before Invisalign" className="rounded-standard" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <img src="https://images.unsplash.com/photo-1570004518860-ec9ab61c5158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="After Invisalign" className="rounded-standard" />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white rounded-standard overflow-hidden shadow-soft">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Veneers</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Porcelain veneer treatment
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <img src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Before veneers" className="rounded-standard" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <img src="https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="After veneers" className="rounded-standard" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Testimonials;