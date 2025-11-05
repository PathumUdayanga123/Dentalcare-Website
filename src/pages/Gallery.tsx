import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
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
      staggerChildren: 0.1
    }
  }
};
const Gallery = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const galleryImages = {
    clinic: [{
      src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Modern dental clinic reception'
    }, {
      src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental treatment room'
    }, {
      src: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental chair and equipment'
    }, {
      src: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental office waiting area'
    }, {
      src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Patient consultation'
    }, {
      src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dentist examining patient'
    }],
    team: [{
      src: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dentist portrait'
    }, {
      src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental hygienist'
    }, {
      src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dental team meeting'
    }, {
      src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Dentist with patient'
    }],
    smiles: [{
      src: 'https://images.unsplash.com/photo-1570004518860-ec9ab61c5158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Beautiful smile after treatment'
    }, {
      src: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Patient smiling'
    }, {
      src: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Healthy teeth close-up'
    }, {
      src: 'https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Woman smiling'
    }, {
      src: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Man with perfect smile'
    }]
  };
  const openLightbox = image => {
    setLightboxImage(image);
    document.body.style.overflow = 'hidden';
  };
  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = 'auto';
  };
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg text-gray-600">
              Take a look at our clinic, team, and happy patients
            </p>
          </motion.div>
        </div>
      </section>
      {/* Clinic Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Clinic" subtitle="Take a virtual tour of our modern dental facility designed with your comfort in mind." center />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {galleryImages.clinic.map((image, index) => <motion.div key={index} variants={fadeIn} className="overflow-hidden rounded-standard shadow-soft cursor-pointer" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      {/* Team Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Our Team" subtitle="Meet the dedicated professionals who make your dental experience exceptional." center />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {galleryImages.team.map((image, index) => <motion.div key={index} variants={fadeIn} className="overflow-hidden rounded-standard shadow-soft cursor-pointer" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      {/* Smiles Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Beautiful Smiles" subtitle="See the results of our dental treatments and the happy smiles of our patients." center />
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {galleryImages.smiles.map((image, index) => <motion.div key={index} variants={fadeIn} className="overflow-hidden rounded-standard shadow-soft cursor-pointer" onClick={() => openLightbox(image)}>
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      {/* Lightbox */}
      {lightboxImage && <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition-colors" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-standard" />
            <p className="text-white text-center mt-4">{lightboxImage.alt}</p>
          </div>
        </div>}
    </div>;
};
export default Gallery;