import { ReactNode } from "react";

export interface Service {
  id: number;
  title: string;
  image: string;
  icon: ReactNode | string;
  description: string;
  moreDetails: string;
}

const ServicesData: Service[] = [
  {
    id: 1,
    title: "Εκτελωνισμός Αυτοκινήτων",
    image: "/car.jpg",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1"
        />
      </svg>
    ),
    description:
      "Πλήρης διεκπεραίωση για επιβατικά Ι.Χ., υβριδικά και ηλεκτρικά οχήματα.",
    moreDetails:
      "Αναλαμβάνουμε τον εκτελωνισμό επιβατικών αυτοκινήτων από χώρες της Ε.Ε. και τρίτες χώρες. Η διαδικασία περιλαμβάνει τον υπολογισμό του τέλους ταξινόμησης με βάση τις εκπομπές ρύπων (Euro), την αξία λιανικής και την παλαιότητα. Σας καθοδηγούμε για την επιλογή του πιο συμφέροντος τρόπου εισαγωγής, διασφαλίζοντας τη σωστή εφαρμογή των δασμολογικών κλάσεων.",
  },
  {
    id: 2,
    title: "Εκτελωνισμός Φορτηγών",
    image: "/truck_van.jpg",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    description:
      "Εξειδικευμένες υπηρεσίες για επαγγελματικά οχήματα, φορτηγά και μηχανήματα έργου.",
    moreDetails:
      "Διαθέτουμε μεγάλη εμπειρία στον εκτελωνισμό επαγγελματικών οχημάτων κάθε τύπου, όπως φορτηγά δημόσιας ή ιδιωτικής χρήσης, τράκτορες και ρυμουλκούμενα. Αναλαμβάνουμε τη διαχείριση του ΦΠΑ, τις απαλλαγές για επαγγελματίες και όλες τις απαραίτητες επικοινωνίες με τις τελωνειακές αρχές για γρήγορη απόδοση του οχήματος στην κυκλοφορία.",
  },
  {
    id: 3,
    title: "Εκτελωνισμός Μοτοσυκλετών",
    image: "/motorcycle.jpg",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 18l-3.5 7h7L12 18zM12 18V3M4.5 8h15M7 13h10"
        />
      </svg>
    ),
    description:
      "Γρήγορος εκτελωνισμός για δίκυκλα, ATV και μοτοσυκλέτες κάθε κυβισμού.",
    moreDetails:
      "Η εισαγωγή μοτοσυκλέτας απαιτεί προσοχή στα έγγραφα ταυτοποίησης και τη συμμόρφωση με τα ευρωπαϊκά πρότυπα. Διεκπεραιώνουμε τις διαδικασίες για μηχανές από Ε.Ε. ή τρίτες χώρες, υπολογίζοντας με ακρίβεια τους φόρους βάσει κυβισμού και παλαιότητας, ώστε να αποφύγετε καθυστερήσεις.",
  },
  {
    id: 4,
    title: "Εκτελωνισμός Τροχόσπιτων",
    image: "/Caravan.jpg",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    description:
      "Εξειδικευμένη υποστήριξη για την εισαγωγή τροχόσπιτων και αυτοκινούμενων.",
    moreDetails:
      "Τα τροχόσπιτα και τα αυτοκινούμενα έχουν ειδικό καθεστώς φορολόγησης. Σας παρέχουμε πλήρη ενημέρωση για τα τέλη ταξινόμησης και τις προϋποθέσεις έγκρισης τύπου, αναλαμβάνοντας όλη τη γραφειοκρατία για τη νόμιμη παραμονή και κυκλοφορία τους στην Ελλάδα.",
  },
  {
    id: 5,
    title: "Απαλλαγές ΑΜΕΑ",
    image: "/wheelchair-accessible-car-mod.webp",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
        <circle cx="12" cy="5" r="2" strokeWidth="2" />
      </svg>
    ),
    description:
      "Πλήρης καθοδήγηση για τις δασμολογικές απαλλαγές ατόμων με αναπηρία.",
    moreDetails:
      "Υποστηρίζουμε άτομα με αναπηρία στη διαδικασία εισαγωγής οχήματος με απαλλαγή από το τέλος ταξινόμησης. Διασφαλίζουμε ότι το όχημα πληροί τις προϋποθέσεις του νόμου για την πλήρη φοροαπαλλαγή.",
  },
  {
    id: 6,
    title: "Πολύτεκνοι / Τρίτεκνοι",
    image: "/family-packing-car.jpg",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    description:
      "Ειδικές διαδικασίες εκτελωνισμού για πολύτεκνες και τρίτεκνες οικογένειες.",
    moreDetails:
      "Οι πολύτεκνες και τρίτεκνες οικογένειες δικαιούνται σημαντικές απαλλαγές κατά την εισαγωγή αυτοκινήτου. Αναλαμβάνουμε τον έλεγχο των κριτηρίων και τη διεκπεραίωση της ατέλειας, φροντίζοντας για την ταχύτερη δυνατή ολοκλήρωση της διαδικασίας χωρίς περιττά έξοδα.",
  },
  {
    id: 7,
    title: "Ταξινόμηση Οχημάτων",
    image: "/taxonomy.png",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    description:
      "Έκδοση πινακίδων και άδειας κυκλοφορίας για την οριστική ένταξη στο ελληνικό μητρώο.",
    moreDetails:
      "Η ταξινόμηση είναι το τελικό στάδιο. Αναλαμβάνουμε την έκδοση πινακίδων, τη σύνταξη του φακέλου για το Υπουργείο Μεταφορών και την πληρωμή των τελών κυκλοφορίας, παραδίδοντάς σας το όχημα έτοιμο προς χρήση.",
  },
  {
    id: 8,
    title: "Εισαγωγές / εξαγωγές",
    image: "/cargoShipPort.png",
    icon: (
      <svg
        className="w-10 h-10 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    description:
      "Αναλαμβάνουμε πλήρως τη διαδικασία εισαγωγής και εξαγωγής οχημάτων.",
    moreDetails:
      "Με γνώση της νομοθεσίας και εμπειρία στον εκτελωνισμό, διασφαλίζουμε την ομαλή και γρήγορη διεκπεραίωση κάθε υπόθεσης, ανεξαρτήτως τύπου οχήματος, προσφέροντας αξιόπιστες λύσεις τόσο για ιδιώτες όσο και για επαγγελματίες. Από τον έλεγχο των απαραίτητων εγγράφων και τον υπολογισμό των δασμών έως την ολοκλήρωση των διαδικασιών εκτελωνισμού.",
  },
];

export default ServicesData;
