import { HospitalIcon } from "lucide-react"

const HospitalsWeServe = ({hospitals, city}:{hospitals: string[] | undefined, city: string}) => {
  if(!hospitals) return null
    return (
    <section className="relative py-20">
       <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl text-center md:text-4xl font-sans font-bold text-red-600 mb-6">
           Major Hospitals in {city}
    </h2>
          <p className="mt-4 md:text-lg text-gray-600">
            Ambulance Transport to All Major Hospitals in <span className="underline">{city}</span>
          </p>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10 px-4 md:px-10">
          {hospitals.map((hospital, index) => (
            <div key={index} className="flex items-center md:mb-10">
              <div className="flex-shrink-0">
                <HospitalIcon className="w-8 h-8 md:w-8 md:h-8 text-red-500" />
              </div>
              <div className="ml-2 md:ml-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {hospital}
                </h3>
              </div>
            </div>
          ))}
        </div>
        </div> 
    </section>
  )
}

export default HospitalsWeServe
