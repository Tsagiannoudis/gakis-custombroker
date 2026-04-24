import React from "react";
import Link from "next/link";

const HowCost = () => {
  const whatWeNeed = [
    {
      id: 1,
      title: "Μάρκα & Μοντέλο Οχήματος",
      description:
        "Απαραίτητα για τον προσδιορισμό της εμπορικής αξίας και των τεχνικών χαρακτηριστικών.",
    },
    {
      id: 2,
      title: "Κυβικά",
      description:
        "Ο κυβισμός του κινητήρα επηρεάζει άμεσα το τέλος ταξινόμησης και τους φόρους.",
    },
    {
      id: 3,
      title: "Έτος πρώτης κυκλοφορίας",
      description:
        "Το έτος κυκλοφορίας καθορίζει την παλαιότητα και επηρεάζει τον υπολογισμό των δασμών.",
    },
    {
      id: 4,
      title: "Καύσιμο",
      description:
        "Ο τύπος καυσίμου (βενζίνη, diesel, υβριδικό, ηλεκτρικό) έχει διαφορετική φορολογική αντιμετώπιση.",
    },
  ];

  return (
    <section className=" bg-gray-50 py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Υπολογισμός Κόστους
          </h2>
        </div>
        <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeNeed.map((need) => (
            <div
              key={need.title}
              className="relative p-8 bg-white rounded-3xl border border-gray-100"
            >
              <p className="font-bold text-gray-900 mb-3 mt-2">{need.title}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {need.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p>
            Συμπλήρωσε την φόρμα επικοινωνίας και σύντομα θα μάθεις περισσότερες
            πληροφοριές
          </p>
          <Link
            href="/contact"
            className="inline-flex item-center text-[#ba283d] font-bold hover:gap-2 transition-all group"
          >
            Φόρμα επικοινωνίας
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowCost;
