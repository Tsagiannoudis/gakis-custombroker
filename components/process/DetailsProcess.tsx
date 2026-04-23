import ProcessData from "@/data/ProcessData";
import Image from "next/image";

const DetailsProcess = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
                    {ProcessData.map((process) => (
                        <div 
                            key={process.id}
                            className="group flex flex-col bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-72 w-full">
                                <Image
                                    src={process.image}
                                    alt={process.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 lg:p-10">
                                {/* <div className="mb-6 inline-block p-4 bg-blue-50 rounded-2xl">
                                    {process.icon}
                                </div> */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {process.moreDetails}
                                </p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailsProcess;
