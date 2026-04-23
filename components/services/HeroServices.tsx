import Image from "next/image";

const HeroServices = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center bg-gray-50 pt-32 pb-12 lg:py-64 overflow-hidden">
      {/* Διακοσμητικό φόντο (blur effect) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 lg:mt-0">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 uppercase tracking-wider">
              Ολοκληρωμένες Λύσεις
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Οι <span className="text-blue-600">Υπηρεσίες</span> μας
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10">
              Εξειδικευμένες υπηρεσίες εκτελωνισμού με έμφαση στην ποιότητα, την
              αξιοπιστία και την άριστη εξυπηρέτηση για κάθε τύπο οχήματος.
            </p>
          </div>

          {/* Decorative/Image Side */}
          <div className="flex-1 relative w-full max-w-[500px] order-1 lg:order-2">
            <div className="relative aspect-video lg:aspect-square bg-white rounded-[2.5rem] shadow-2xl border-8 border-white overflow-hidden transform lg:-rotate-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent z-10" />
              <Image
                src="/heroHome2.jpg" // Μπορείς να χρησιμοποιήσεις μια άλλη εικόνα από το array σου
                alt="Υπηρεσίες Εκτελωνισμού"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Μικρό διακοσμητικό στοιχείο */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-3xl -z-10 animate-pulse" />
          </div>
        </div>
        </div>
    </section>
  );
};

export default HeroServices;