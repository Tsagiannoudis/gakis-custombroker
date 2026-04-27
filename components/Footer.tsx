import Link from "next/link";
import Image from "next/image";
import NavLinksData from "@/data/NavLinksData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Branding & About */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/gakis-front-red.png"
                alt="logo Gakis ee"
                width={180}
                height={54}
                priority
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Εξειδικευμένες υπηρεσίες εκτελωνισμού στη Θεσσαλονίκη με συνέπεια,
              ταχύτητα και απόλυτη διαφάνεια για κάθε τύπο οχήματος.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Πλοήγηση</h4>
            <ul className="flex flex-col gap-4">
              {NavLinksData.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-500 hover:text-[#ba283d] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Access */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Υπηρεσίες</h4>
            <ul className="flex flex-col gap-4">
              {["Αυτοκίνητα", "Φορτηγά", "Μοτοσυκλέτες", "Τροχόσπιτα"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-500 hover:text-[#ba283d] transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Επικοινωνία</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-[#ba283d] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <Link
                  href="https://maps.app.goo.gl/8NGRWazU1RcHmSqg8"
                  target="_blank"
                  className="hover:text-[#ba283d] transition-colors"
                >
                  26ης Οκτωβρίου 28 & Αναγεννήσεως 2, Θεσσαλονίκη, Τ.Κ. 546 27
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-[#ba283d] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  href="tel:+302316016810"
                  className="hover:text-[#ba283d] transition-colors"
                >
                  +30 2316 016810
                </Link>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-[#ba283d] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <Link
                  href="mailto:gakisnikos85@gmail.com"
                  className="hover:text-[#ba283d] transition-colors"
                >
                  gakisnikos85@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-400 text-xs">
            © {currentYear} Εκτελωνισμοί Γάκης. Με επιφύλαξη παντός δικαιώματος.
            || Powered by tSagian Projects
          </p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link
              href="/privacy"
              className="hover:text-gray-600 transition-colors"
            >
              Πολιτική Απορρήτου
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-600 transition-colors"
            >
              Όροι Χρήσης
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
