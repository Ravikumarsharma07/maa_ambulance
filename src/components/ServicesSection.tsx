import { 
  Truck, 
  Plane, 
  Heart, 
  Users, 
  Clock, 
  Shield,
  Stethoscope,
  Activity
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: '24x7 Service',
      description: 'Round-the-clock emergency ambulance service available 365 days a year across India.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Heart,
      title: 'ICU Ambulances',
      description: 'Fully equipped ICU ambulances with ventilators, cardiac monitors, and life support systems.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Truck,
      title: 'Road Ambulance',
      description: 'Fast and reliable road ambulance services with GPS tracking and trained paramedics.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Plane,
      title: 'Air Ambulance',
      description: 'Emergency air ambulance services for critical patients requiring long-distance transport.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Users,
      title: 'Medical Staff',
      description: 'Trained paramedics, nurses, and emergency medical technicians on every ambulance.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Shield,
      title: 'Safe Transport',
      description: 'Safe and secure patient transport with modern safety equipment and protocols.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment',
      description: 'State-of-the-art medical equipment including defibrillators, oxygen support, and monitors.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: 'Immediate emergency medical care and stabilization during transport to hospitals.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Ambulance Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive emergency medical transport services with modern equipment, 
            trained medical staff, and nationwide coverage across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-red-600"
            >
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="tel:+919876543210"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-xl font-semibold inline-flex items-center transition-colors shadow-lg"
          >
            <Clock className="w-6 h-6 mr-3" />
            Book Emergency Ambulance Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;