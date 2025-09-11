"use client";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SubHeading from "./smallComponents/SubHeading";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Jyoti Ambulance Services saved my father's life. Their response time was incredible - they reached us within 8 minutes and the paramedics were highly skilled. Truly grateful for their service.",
      date: "2024-01-10",
    },
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Professional service with modern equipment. The ambulance was clean and well-equipped. The medical staff was caring and ensured my mother was comfortable throughout the journey to the hospital.",
      date: "2024-01-05",
    },
    {
      name: "Dr. Anil Patel",
      location: "Bangalore",
      rating: 5,
      text: "As a doctor, I can vouch for the quality of their medical equipment and trained staff. I regularly refer patients to use Jyoti Ambulance Services for emergency transport. Highly recommended.",
      date: "2023-12-28",
    },
    {
      name: "Meera Singh",
      location: "Chennai",
      rating: 5,
      text: "During a medical emergency at 2 AM, they were our lifeline. The dispatcher was calm and helpful, and the ambulance arrived quickly. Their 24/7 service is truly reliable.",
      date: "2023-12-20",
    },
    {
      name: "Vikram Gupta",
      location: "Hyderabad",
      rating: 5,
      text: "Excellent service with transparent pricing. No hidden charges and the staff explained everything clearly. The ICU ambulance had all necessary equipment for my wife's critical condition.",
      date: "2023-12-15",
    },
    {
      name: "Sunita Reddy",
      location: "Pune",
      rating: 5,
      text: "Fast, reliable, and professional. The paramedics were well-trained and handled the emergency with great care. Would definitely recommend to anyone needing ambulance services.",
      date: "2023-12-10",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length));
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SubHeading title="Testimonials" />
          <p className="md:text-lg text-gray">
            Read testimonials from families who trusted us during their medical
            emergencies. Your feedback helps us continue providing the best
            ambulance services across India.
          </p>
        </div>

        <div className="relative flex max-w-screen overflow-hidden">
          <div className="absolute z-10 left-0 right-0 w-full h-max self-center flex-between sm:px-2">
            <ChevronLeft
              onClick={() =>{
                setCurrentSlide((prev) => {
                  if(prev === 0){
                    return testimonials.length - 1
                  }
                  return (prev - 1) % testimonials.length
                })
              }
              }
              className="w-12 h-12 p-1 cursor-pointer  bg-gray-100/90 rounded-full opacity-40 hover:opacity-70"
            />
            <ChevronRight
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % testimonials.length)
              }
              className="w-12 h-12 p-1 cursor-pointer bg-gray-100/90 rounded-full opacity-40 hover:opacity-70"
            />
          </div>
          <div
            className={`flex w-max gap-8 pl-2 transition-transform duration-1000`}
            style={{
              transform: `${
                currentSlide === 0
                  ? "translateX(0px)"
                  : `translateX(-${currentSlide * 16.9}%)`
              }`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white w-[330px] sm:w-[382px] p-8 rounded-xl border-t-4 border-red-600"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-red-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <p className="text-gray-500 text-xs">
                      {new Date(testimonial.date).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-xl shadow-lg inline-block max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Your feedback helps us improve our services and assists other
              families in making informed decisions during medical emergencies.
            </p>
            <a
              href="tel:+91-9540944424"
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
