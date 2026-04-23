"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/heroHome1.jpg",
  "/heroHome2.jpg",
  "/heroHome3.jpg",
  "/heroHome4.jpg",
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex items-center bg-gray-50 pt-32 pb-12 lg:py-64 overflow-hidden">
      {/* Διακοσμητικό φόντο (blur effect) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-100/60 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-20 z-10">
        {/* mt-12 για mobile απόσταση, lg:mt-0 για να αφαιρεθεί στο desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 lg:mt-0">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6 uppercase tracking-wider">
              Επαγγελματική Υποστήριξη
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              Εκτελωνισμοί Οχημάτων <br />
              <span className="text-blue-600">Χωρίς Άγχος</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Αναλαμβάνουμε όλη τη γραφειοκρατία για την εισαγωγή ή την εξαγωγή και ταξινόμηση
              του οχήματός σας. Από το αυτοκίνητο μέχρι το επαγγελματικό
              φορτηγό, προσφέρουμε ταχύτητα και διαφάνεια.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-200"
              >
                Επικοινωνήστε μαζί μας
              </Link>
              <Link
                href="/services"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold transition-all shadow-sm"
              >
                Οι Υπηρεσίες μας
              </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 relative w-full aspect-square max-w-[400px] lg:max-w-none order-1 lg:order-2">
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white transform lg:rotate-2 bg-gray-200">
              {images.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Εκτελωνισμοί αυτοκινήτων Gakis - ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <p className="text-blue-600 font-bold text-xl md:text-2xl">
                100%
              </p>
              <p className="text-gray-500 text-xs md:text-sm font-medium">
                Ασφαλής Διαδικασία
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
