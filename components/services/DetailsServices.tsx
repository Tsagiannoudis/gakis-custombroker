import ServicesData from "@/data/ServicesData";
import Image from "next/image";

const DetailsServices = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {ServicesData.map((service) => (
                        <div 
                            key={service.id}
                            className="group flex flex-col bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-72 w-full">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 lg:p-10">
                                {/* <div className="mb-6 inline-block p-4 bg-blue-50 rounded-2xl">
                                    {service.icon}
                                </div> */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.moreDetails}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailsServices;
