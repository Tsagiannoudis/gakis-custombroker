import Image from "next/image";
import Link from "next/link";

const WhyUs = () => {
  const features = [
    {
      title: "Πολυετής Εμπειρία",
      description: "Με εμπειρία χρόνων στον χώρο, γνωρίζουμε κάθε λεπτομέρεια της νομοθεσίας για να αποφύγετε περιττά έξοδα.",
      icon: (
        <svg className="w-8 h-8 text-[#ba283d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Γρήγορη Εξυπηρέτηση",
      description: "Διεκπεραιώνουμε τις υποθέσεις σας στον συντομότερο δυνατό χρόνο, εξασφαλίζοντας άμεση παράδοση των εντύπων του οχήματός σας.",
      icon: (
        <svg className="w-8 h-8 text-[#ba283d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Εξειδίκευση",
      description: "Ειδική τεχνογνωσία για ειδικές κατηγορίες όπως ΑΜΕΑ και πολύτεκνοι, με πλήρη ενημέρωση για τις απαλλαγές.",
      icon: (
        <svg className="w-8 h-8 text-[#ba283d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Διαφανείς Διαδικασίες",
      description: "Πλήρης ενημέρωση για τα κόστη και τα στάδια του εκτελωνισμού, χωρίς κρυφές χρεώσεις ή δυσάρεστες εκπλήξεις.",
      icon: (
        <svg className="w-8 h-8 text-[#ba283d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Διακοσμητικό φόντο (blur effect) */}
      <div className="absolute bottom-0 left-0 -translate-x-1/4 translate-y-1/4 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Γιατί να μας επιλέξετε;
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Εξειδικευμένες υπηρεσίες εκτελωνισμού με έμφαση στην ποιότητα, την
            αξιοπιστία και την άριστη εξυπηρέτηση.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-6 p-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 p-4 bg-red-50 rounded-2xl">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA για το section */}
        {/* <div className="mt-16 text-center">
          <Link 
            href="/about" 
            className="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all group"
          >
            Μάθετε περισσότερα για εμάς 
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default WhyUs;
