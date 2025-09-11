import { Clock, Users, Shield, DollarSign } from 'lucide-react';

const reasons = [
    {
        icon: Clock,
        title: "Fastest Response Time",
        description: "Our GPS-enabled fleet is strategically placed across Delhi NCR to ensure we reach you in the shortest possible time."
    },
    {
        icon: Users,
        title: "Certified & Experienced Team",
        description: "Every ambulance is staffed with certified paramedics and experienced medical personnel trained in critical care."
    },
    {
        icon: Shield,
        title: "24/7 Emergency Availability",
        description: "We are operational 24 hours a day, 365 days a year, because emergencies don't wait."
    },
    {
        icon: DollarSign,
        title: "Transparent Pricing",
        description: "We provide clear, upfront pricing with no hidden charges, ensuring peace of mind during stressful times."
    }
];

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Choose Jyoti Ambulance?
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        When every second counts, you need a service you can depend on.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason) => (
                        <div key={reason.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                            <reason.icon className="h-10 w-10 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;