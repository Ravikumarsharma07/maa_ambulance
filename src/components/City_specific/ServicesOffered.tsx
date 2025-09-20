interface service {
    name: string;
    description: string;
}

const ServicesOffered = ({services}:{services: service[] | undefined}) => {
  if(!services) return null
    return (
    <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-center md:text-4xl font-sans font-bold text-red-600 mb-6">
                Services Offered
            </h2>
            <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-10 px-4 md:px-10">
                {services.map((service, index) => (
                    <div key={index} className="flex items-center p-4  rounded-3xl bg-white ">
                        <div className="flex-shrink-0">
                           
                        </div>
                        <div className="">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.name}</h3>
                            <p className="mt-2 md:text-lg text-gray-600">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ServicesOffered
