const ServicesData = [
    {
        id: 1,
        title: "Αυτοκίνητα",
        images:"/services/car.jpg",
        icon: (<svg
          className="w-10 h-10 text-[#ba283d]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
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
        </svg>),
        description: "Ολοκληρωμένες διαδικασίες εκτελωνισμού για επιβατικά Ι.Χ., υβριδικά και ηλεκτρικά οχήματα.",
        moreDetails: "",
    },
    {
        id: 2,
        title: "Φορτηγά",
        images:"/services/truck.jpg",
        icon: (
          <svg
            className="w-10 h-10 text-[#ba283d]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        ),
        description: "Εξειδικευμένες υπηρεσίες για επαγγελματικά οχήματα, φορτηγά και μηχανήματα έργου.",
        moreDetails: "",
    },
    {
        id: 3,
        title: "Μοτοσυκλέτες",
        images:"/services/motorcycle.jpg",
        icon: (
          <svg
            className="w-10 h-10 text-[#ba283d]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 18l-3.5 7h7L12 18zM12 18V3M4.5 8h15M7 13h10"
            />
          </svg>
        ),
        description: "Γρήγορος εκτελωνισμός για δίκυκλα, ATV και μοτοσυκλέτες κάθε κυβισμού.",
        moreDetails: "",
    },
    {
        id: 4,
        title: "Tροχόσπιτα",
        images:"/services/classification.jpg",
        icon: (
          <svg
            className="w-10 h-10 text-[#ba283d]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        ),
        description: "Πλήρης υποστήριξη για την έκδοση πινακίδων και την οριστική ταξινόμηση του οχήματός σας.",
        moreDetails: "",
    },
];

export default ServicesData;