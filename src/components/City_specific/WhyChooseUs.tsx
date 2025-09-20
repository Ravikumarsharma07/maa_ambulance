import Image from "next/image"
import SubHeading from "../smallComponents/SubHeading"

const WhyChooseUs = ({whyUs, city}:{whyUs:string[] | undefined, city:string}) => {
  if(!whyUs) return null
    return (
    <section className="relative py-20 bg-black/60">
        {/* bg image  */}
        <div className="absolute inset-0">
            <Image
            src="/cardiac-ambulance.jpg"
            alt="Ambulance background"
            fill
            priority
            className="w-full h-[400px] object-cover -z-10"
            />
        </div>

        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-center md:text-4xl font-sans font-bold text-red-500 mb-6">
                Why Choose Jyoti Ambulance services in <span className=" underline">{city}</span>?
    </h2>
            <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-10 px-1">
                {whyUs.map((reason, index) => (
                <div key={index} className="flex items-center">
                    <div className="flex-shrink-0">
                    <svg
                        className="w-8 h-8 md:w-8 md:h-8 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                        />
                    </svg>
                    </div>
                    <div className="ml-2">
                    <h3 className="md:text-lg font-semibold text-gray-300">{reason}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs
