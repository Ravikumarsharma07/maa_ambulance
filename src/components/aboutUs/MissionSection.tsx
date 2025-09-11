import { Heart, Stethoscope, ShieldCheck } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Mission & Core Values
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Our mission is to provide the fastest, most reliable, and compassionate{" "}
          <strong>emergency medical transport in Delhi NCR</strong>. We are
          committed to saving lives through clinical excellence and an unwavering
          focus on patient care during their most critical moments.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="p-6">
            <Heart className="mx-auto h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold">Compassion</h3>
            <p className="mt-2 text-gray-600">
              Treating every patient and their family with empathy and respect.
            </p>
          </div>
          {/* Value 2 */}
          <div className="p-6">
            <Stethoscope className="mx-auto h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold">Excellence</h3>
            <p className="mt-2 text-gray-600">
              Upholding the highest standards of medical care and safety.
            </p>
          </div>
          {/* Value 3 */}
          <div className="p-6">
            <ShieldCheck className="mx-auto h-12 w-12 text-red-600" />
            <h3 className="mt-4 text-xl font-semibold">Integrity</h3>
            <p className="mt-2 text-gray-600">
              Operating with transparency, especially in our pricing and communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;