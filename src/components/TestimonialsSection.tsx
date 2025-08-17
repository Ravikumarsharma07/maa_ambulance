import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Jyoti Ambulance Services saved my father\'s life. Their response time was incredible - they reached us within 8 minutes and the paramedics were highly skilled. Truly grateful for their service.',
      date: '2024-01-10'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Professional service with modern equipment. The ambulance was clean and well-equipped. The medical staff was caring and ensured my mother was comfortable throughout the journey to the hospital.',
      date: '2024-01-05'
    },
    {
      name: 'Dr. Anil Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'As a doctor, I can vouch for the quality of their medical equipment and trained staff. I regularly refer patients to use Jyoti Ambulance Services for emergency transport. Highly recommended.',
      date: '2023-12-28'
    },
    {
      name: 'Meera Singh',
      location: 'Chennai',
      rating: 5,
      text: 'During a medical emergency at 2 AM, they were our lifeline. The dispatcher was calm and helpful, and the ambulance arrived quickly. Their 24/7 service is truly reliable.',
      date: '2023-12-20'
    },
    {
      name: 'Vikram Gupta',
      location: 'Hyderabad',
      rating: 5,
      text: 'Excellent service with transparent pricing. No hidden charges and the staff explained everything clearly. The ICU ambulance had all necessary equipment for my wife\'s critical condition.',
      date: '2023-12-15'
    },
    {
      name: 'Sunita Reddy',
      location: 'Pune',
      rating: 5,
      text: 'Fast, reliable, and professional. The paramedics were well-trained and handled the emergency with great care. Would definitely recommend to anyone needing ambulance services.',
      date: '2023-12-10'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from families who trusted us during their medical emergencies. 
            Your feedback helps us continue providing the best ambulance services across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-red-600 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                  <p className="text-gray-500 text-xs">
                    {new Date(testimonial.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Your feedback helps us improve our services and assists other families 
              in making informed decisions during medical emergencies.
            </p>
            <a
              href="tel:+919876543210"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              <Star className="w-5 h-5 mr-3" />
              Leave a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;