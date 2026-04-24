const Procedures = () => {
    const procedures = [
        {
            title:"Επικοινωνία",
            description:"Αρχική επικοινωνία για την ανάλυση των αναγκών σας και παροχή συμβουλών.",
        },
        {
            title:"Έλεγχος εγγράφων",
            description:"Λεπτομερής έλεγχος όλων των απαραίτητων δικαιολογητικών για την αποφυγή καθυστερήσεων.",
        },
        {
            title:"Εκτελωνισμός",
            description:"Διεκπεραίωση όλων των τελωνειακών διατυπώσεων με ταχύτητα και αξιοπιστία.",
        },
        {
            title:"Παράδοση",
            description:"Ολοκλήρωση της διαδικασίας και παράδοση των εγγράφων ταξινόμησης του οχήματός σας.",
        },
    ];

    return(
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
                        Η Διαδικασία μας
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Η σειρά που πρέπει να ακολουθηθεί ώστε να γίνει σωστά η διαδιασία του οχήματός σας.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {procedures.map((proc, index) => (
                        <div key={index} className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100">
                            <span className="absolute -top-4 -left-4 w-12 h-12 bg-[#ba283d] text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                                {index + 1}
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{proc.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{proc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Procedures;