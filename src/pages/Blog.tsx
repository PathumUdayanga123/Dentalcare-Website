import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
const BlogCard = ({
  title,
  excerpt,
  image,
  date,
  author,
  slug
}) => <motion.div variants={fadeIn} className="bg-white rounded-standard overflow-hidden shadow-soft hover:shadow-md transition-all duration-300">
    <div className="relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{author}</span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/blog/${slug}`} className="text-primary font-medium hover:text-blue-600 transition-colors">
        Read More
      </Link>
    </div>
  </motion.div>;
const Blog = () => {
  const blogPosts = [{
    title: '5 Tips for Healthy Teeth',
    excerpt: 'Discover simple daily habits that can significantly improve your oral health and prevent common dental problems.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'June 15, 2023',
    author: 'Dr. James Wilson',
    slug: 'tips-for-healthy-teeth'
  }, {
    title: 'Benefits of Regular Dental Checkups',
    excerpt: "Regular dental visits are essential for maintaining good oral health. Learn why you shouldn't skip your bi-annual checkups.",
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 28, 2023',
    author: 'Dr. Lisa Chen',
    slug: 'benefits-of-regular-dental-checkups'
  }, {
    title: 'Difference Between Whitening and Cleaning',
    excerpt: 'Many patients confuse teeth whitening with regular cleaning. Understand the differences and which one you might need.',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'May 12, 2023',
    author: 'Dr. Robert Taylor',
    slug: 'whitening-vs-cleaning'
  }, {
    title: 'How to Choose the Right Toothbrush',
    excerpt: "With so many options available, choosing the right toothbrush can be confusing. Here's what dentists recommend.",
    image: 'https://images.unsplash.com/photo-1559304822-9eb2813c9844?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'April 30, 2023',
    author: 'Dr. Sarah Johnson',
    slug: 'choosing-right-toothbrush'
  }, {
    title: 'Understanding Gum Disease',
    excerpt: 'Gum disease is a common but serious condition. Learn about the symptoms, causes, and treatments for periodontal disease.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'April 18, 2023',
    author: 'Dr. Michael Brown',
    slug: 'understanding-gum-disease'
  }, {
    title: 'Dental Care for Children',
    excerpt: "Establishing good oral hygiene habits early is crucial. Discover tips for taking care of your child's teeth from infancy.",
    image: 'https://images.unsplash.com/photo-1588776814279-e8c6c71f8b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'April 5, 2023',
    author: 'Dr. Emily Rodriguez',
    slug: 'dental-care-for-children'
  }, {
    title: 'Foods That Strengthen Your Teeth',
    excerpt: 'Your diet plays a significant role in your dental health. Learn which foods can help strengthen your teeth and gums.',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'March 22, 2023',
    author: 'Dr. James Wilson',
    slug: 'foods-for-stronger-teeth'
  }, {
    title: 'What to Expect During a Root Canal',
    excerpt: "Root canals have a bad reputation, but modern techniques have made them much more comfortable. Here's what to expect.",
    image: 'https://images.unsplash.com/photo-1609840112990-4265448268d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'March 10, 2023',
    author: 'Dr. Lisa Chen',
    slug: 'what-to-expect-root-canal'
  }, {
    title: 'The Connection Between Oral Health and Overall Health',
    excerpt: 'Your oral health is connected to your overall health in surprising ways. Discover how taking care of your teeth benefits your whole body.',
    image: 'https://images.unsplash.com/photo-1513759565286-20e9c5fad06b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: 'February 28, 2023',
    author: 'Dr. Robert Taylor',
    slug: 'oral-health-overall-health'
  }];
  return <div className="w-full">
      {/* Header Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" animate="visible" variants={fadeIn}>
            <h1 className="text-4xl font-bold mb-4">Dental Tips & Articles</h1>
            <p className="text-lg text-gray-600">
              Helpful information to keep your smile healthy and bright
            </p>
          </motion.div>
        </div>
      </section>
      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Latest Articles" subtitle="Stay informed with our latest dental tips, news, and advice for maintaining optimal oral health." center />
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {blogPosts.map((post, index) => <BlogCard key={index} {...post} />)}
          </motion.div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{
          once: true
        }} variants={fadeIn}>
            <h2 className="text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="mb-8">
              Stay updated with the latest dental tips and news. We promise not
              to spam your inbox!
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-3 rounded-standard focus:outline-none" required />
              <button type="submit" className="bg-white text-primary px-6 py-3 rounded-standard font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Blog;