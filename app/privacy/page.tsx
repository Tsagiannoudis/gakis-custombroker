export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto mt-30 px-6 py-32 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-[#ba283d]">Πολιτική Απορρήτου</h1>
      <div className="prose prose-slate max-w-none text-gray-600 space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Συλλογή Δεδομένων</h2>
          <p>
            Στο γραφείο μας συλλέγουμε μόνο τα απαραίτητα δεδομένα που μας παρέχετε μέσω της φόρμας επικοινωνίας 
            για την εξυπηρέτηση των αιτημάτων σας σχετικά με τον εκτελωνισμό οχημάτων.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Χρήση Πληροφοριών</h2>
          <p>
            Τα στοιχεία σας χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας και δεν 
            μοιράζονται με τρίτους χωρίς τη συγκατάθεσή σας, εκτός αν απαιτείται από τις τελωνειακές αρχές.
          </p>
        </section>
        {/* Προσθέστε περισσότερες ενότητες ανάλογα με τις ανάγκες σας */}
      </div>
    </div>
  );
}