import ServicesData from "@/data/ServicesData";
import Link from "next/link";

const ServicesSection = () => {
  const services = ServicesData;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Προσφέρουμε εξειδικευμένες λύσεις εκτελωνισμού με συνέπεια,
            διαφάνεια και ταχύτητα για κάθε ανάγκη σας.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
