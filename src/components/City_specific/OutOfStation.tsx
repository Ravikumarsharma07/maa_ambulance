import cities from "@/constants/Cities"
import SubHeading from "../smallComponents/SubHeading"

const OutOfStation = ({city}: {city:string}) => {
  return (
    <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
                <SubHeading title={`Affordable Interstate Ambulance Service from ${city} | Jyoti Ambulance`}/>
                <p className="mt-4 md:text-lg text-gray-600">
            Planning to transfer a patient outside {city}? Jyoti Ambulance Services offers reliable and 24/7 interstate ambulance services at the most affordable rates. We ensure a safe, secure, and stress-free long-distance medical transport for your loved ones. Contact us for a quote!
          </p>
            </div>

            <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 md:gap-10 px-4 md:px-20">
                {cities.map((currentCity) => (
                    currentCity.name == city ? null : (

                        <p key={currentCity.slug} className="mt-8 text-lg md:text-xl font-semibold text-gray-900">Ambulance Service {city} to {currentCity.name}</p>
                    )
                ))}
            </div>
            <div className="text-center mt-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
               Call Us Now To Book an Ambulance Outside {city}
            </h3>
            <a
              href="tel:+91-9990228876"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Call Now: +91-9990228876
            </a>
          </div>
        </div>
        </div>
    </section>
  )
}

export default OutOfStation
