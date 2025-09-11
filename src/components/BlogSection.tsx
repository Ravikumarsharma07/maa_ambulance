import Link from 'next/link';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import SubHeading from './smallComponents/SubHeading';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'How to Book an Ambulance Quickly in an Emergency',
      excerpt: 'Learn the fastest way to book an ambulance during medical emergencies and what information to provide to dispatch.',
      image: 'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg',
      date: '2024-01-15',
      readTime: '5 min read',
      slug: 'how-to-book-ambulance-quickly'
    },
    {
      title: 'Types of Ambulance Services Available in India',
      excerpt: 'Understanding different types of ambulance services - basic life support, advanced life support, and air ambulance options.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
      date: '2024-01-10',
      readTime: '7 min read',
      slug: 'types-of-ambulance-services-india'
    },
    {
      title: 'First Aid Tips While Waiting for Ambulance',
      excerpt: 'Essential first aid steps you can take while waiting for emergency medical services to arrive at the scene.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
      date: '2024-01-05',
      readTime: '6 min read',
      slug: 'first-aid-tips-emergency'
    },
    {
      title: 'When to Call Air Ambulance Services',
      excerpt: 'Understanding when air ambulance services are necessary and how they can save critical time in medical emergencies.',
      image: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg',
      date: '2023-12-28',
      readTime: '4 min read',
      slug: 'when-to-call-air-ambulance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title="Health & Emergency Tips" />
          <p className="md:text-lg text-gray-600">
            Stay informed with our latest articles on emergency medical care, 
            ambulance services, and health tips to keep you and your family safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-IN')}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-colors"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;