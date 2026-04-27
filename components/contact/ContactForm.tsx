import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3 bg-[#ba283d] p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-8">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Διεύθυνση</p>
                    <p className="text-red-100 text-sm">
                        <Link href="https://maps.app.goo.gl/8NGRWazU1RcHmSqg8" target="_blank" className="hover:text-white transition-colors">
                    26ης Οκτωβρίου 28 & Αναγεννήσεως 2, Θεσσαλονίκη, Τ.Κ. 546 27
                        </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Τηλέφωνο</p>
                    <Link 
                      href="tel:+302316016810" 
                      className="text-red-100 text-sm hover:text-white transition-colors"
                    >
                      +30 2316 016810
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <Link 
                      href="mailto:gakisnikos85@gmail.com" 
                      className="text-red-100 text-sm hover:text-white transition-colors"
                    >
                      gakisnikos85@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:w-2/3 p-8 md:p-12 bg-white">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700">Ονοματεπώνυμο</label>
                  <input 
                    type="text" id="name" name="name" required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ba283d] focus:border-transparent transition-all outline-none"
                    placeholder="π.χ. Ιωάννης Παπαδόπουλος"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                  <input 
                    type="email" id="email" name="email" required 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ba283d] focus:border-transparent transition-all outline-none"
                    placeholder="info@example.com"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-700">Μήνυμα</label>
                  <textarea 
                    id="message" name="message" required rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ba283d] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                  ></textarea>
                </div>

                <button type="submit" className="md:col-span-2 bg-[#ba283d] hover:bg-[#8b1f2f] text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-red-200 flex items-center justify-center gap-2">
                  Αποστολή Μηνύματος
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;