"use client";
import Link from "next/link";

const ContactSection = () => {
  // const handleOpenContactForm = () => {
  //   // Εδώ προσθέτεις τη λογική που θέλεις, π.χ. scroll στην επικοινωνία
  //   console.log("Το κουμπί επικοινωνίας πατήθηκε");
  // };

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Διακοσμητικό φόντο (blur effect) */}
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Επικοινωνία
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Για περισσότερες πληροφιρίες συμπληρώστε την φόρμα επικοινωνίας.
          </p>
        
        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all group"
          >
            Φόρμα επικοινωνίας
           
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
