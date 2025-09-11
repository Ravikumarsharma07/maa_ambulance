const cities = [
  {
    name: "Delhi NCR",
    slug: "ambulance-service-in-delhi-ncr",
    places: [
      {
        name: "Delhi NCR",
        slug: "ambulance-service-in-delhi-ncr",
      },
      {
        name: "Delhi",
        slug: "ambulance-service-in-delhi",
      },
      {
        name: "Noida",
        slug: "ambulance-service-in-noida",
      },
      {
        name: "Ghaziabad",
        slug: "ambulance-service-in-ghaziabad",
      },
      {
        name: "Gurgaon",
        slug: "ambulance-service-in-gurgaon",
      },
      {
        name: "Faridabad",
        slug: "ambulance-service-in-faridabad",
      },
      {
        name: "Greater Noida",
        slug: "ambulance-service-in-greater-noida",
      },
      {
        name: "Rohini",
        slug: "ambulance-service-in-rohini",
      },
      {
        name: "Dwarka",
        slug: "ambulance-service-in-dwarka",
      },
      {
        name: "Saket",
        slug: "ambulance-service-in-saket",
      },
      {
        name: "Lajpat Nagar",
        slug: "ambulance-service-in-lajpat-nagar",
      },
      {
        name: "Karol Bagh",
        slug: "ambulance-service-in-karol-bagh",
      },
    ],
  },
  {
    name: "Uttar Pradesh",
    slug: "ambulance-service-in-uttar-pradesh",
    places: [
      {
        name: "Uttar Pradesh",
    slug: "ambulance-service-in-uttar-pradesh",
      },
      {
        name: "Lucknow",
        slug: "ambulance-service-in-lucknow",
      },
      {
        name: "Kanpur",
        slug: "ambulance-service-in-kanpur",
      },
      {
        name: "Agra",
        slug: "ambulance-service-in-agra",
      },
      {
        name: "Prayagraj",
        slug: "ambulance-service-in-prayagraj",
      },
      {
        name: "Varanasi",
        slug: "ambulance-service-in-varanasi",
      },
      {
        name: "Gorakhpur",
        slug: "ambulance-service-in-gorakhpur",
      },
      {
        name: "Bareilly",
        slug: "ambulance-service-in-bareilly",
      },
      {
        name: "Meerut",
        slug: "ambulance-service-in-meerut",
      },
      {
        name: "Aligarh",
        slug: "ambulance-service-in-aligarh",
      },
    ],
  },
  {
    name: "Bihar",
    slug: "ambulance-service-in-bihar",
    places: [
      {
        name: "Bihar",
    slug: "ambulance-service-in-bihar",
      },
      {
        name: "Patna",
        slug: "ambulance-service-in-patna",
      },
      {
        name: "Muzaffarpur",
        slug: "ambulance-service-in-muzaffarpur",
      },
      {
        name: "Samastipur",
        slug: "ambulance-service-in-samastipur",
      },
      {
        name: "Darbhanga",
        slug: "ambulance-service-in-darbhanga",
      },
      {
        name: "Hajipur",
        slug: "ambulance-service-in-hajipur",
      },
      {
        name: "Purnea",
        slug: "ambulance-service-in-purnea",
      },
      {
        name: "Katihar",
        slug: "ambulance-service-in-katihar",
      },
      {
        name: "Kishanganj",
        slug: "ambulance-service-in-kishanganj",
      },
      {
        name: "Vaishali",
        slug: "ambulance-service-in-vaishali",
      },
      {
        name: "Motihari",
        slug: "ambulance-service-in-motihari",
      },
      {
        name: "Madhubani",
        slug: "ambulance-service-in-madhubani",
      },
      {
        name: "Sitamarhi",
        slug: "ambulance-service-in-sitamarhi",
      },
      {
        name: "Chhapra",
        slug: "ambulance-service-in-chhapra",
      },
      {
        name: "Siwan",
        slug: "ambulance-service-in-siwan",
      },
      {
        name: "Gaya",
        slug: "ambulance-service-in-gaya",
      },
      {
        name: "Bhagalpur",
        slug: "ambulance-service-in-bhagalpur",
      },
    ],
  },
  {
    name: "Jharkhand",
    slug: "ambulance-service-in-jharkhand",
    places: [
      {
        name: "Jharkhand",
    slug: "ambulance-service-in-jharkhand",
      },
      {
        name: "Ranchi",
        slug: "ambulance-service-in-ranchi",
      },
      {
        name: "Jamshedpur",
        slug: "ambulance-service-in-jamshedpur",
      },
      {
        name: "Dhanbad",
        slug: "ambulance-service-in-dhanbad",
      },
      {
        name: "Hazaribagh",
        slug: "ambulance-service-in-hazaribagh",
      },
    ],
  },
  {
    name: "Punjab",
    slug: "ambulance-service-in-punjab",
    places: [
      {
         name: "Punjab",
    slug: "ambulance-service-in-punjab",
      },
      {
        name: "Chandigarh",
        slug: "ambulance-service-in-chandigarh",
      },
      {
        name: "Mohali",
        slug: "ambulance-service-in-mohali",
      },
      {
        name: "Zirakpur",
        slug: "ambulance-service-in-zirakpur",
      },
      {
        name: "Panchkula",
        slug: "ambulance-service-in-panchkula",
      },
      {
        name: "Ludhiana",
        slug: "ambulance-service-in-ludhiana",
      },
      {
        name: "Jalandhar",
        slug: "ambulance-service-in-jalandhar",
      },
      {
        name: "Gurdaspur",
        slug: "ambulance-service-in-gurdaspur",
      },
      {
        name: "Pathankot",
        slug: "ambulance-service-in-pathankot",
      },
      {
        name: "Patiala",
        slug: "ambulance-service-in-patiala",
      },
      {
        name: "Bathinda",
        slug: "ambulance-service-in-bathinda",
      },
      {
        name: "Amritsar",
        slug: "ambulance-service-in-amritsar",
      },
      {
        name: "Hoshiarpur",
        slug: "ambulance-service-in-hoshiarpur",
      },
    ],
  },
  {
    name: "Uttarakhand",
    slug: "ambulance-service-in-uttarakhand",
    places: [
      {
        name: "Uttarakhand",
    slug: "ambulance-service-in-uttarakhand",
      },
      {
        name: "Dehradun",
        slug: "ambulance-service-in-dehradun",
      },
      {
        name: "Haridwar",
        slug: "ambulance-service-in-haridwar",
      },
      {
        name: "Rishikesh",
        slug: "ambulance-service-in-rishikesh",
      },
      {
        name: "Roorkee",
        slug: "ambulance-service-in-roorkee",
      },
      {
        name: "Haldwani",
        slug: "ambulance-service-in-haldwani",
      },
      {
        name: "Nainital",
        slug: "ambulance-service-in-nainital",
      },
    ],
  },
  {
    name: "Himachal Pradesh",
    slug: "ambulance-service-in-himachal-pradesh",
    places: [
      {
        name: "Himachal Pradesh",
    slug: "ambulance-service-in-himachal-pradesh",
      },
      {
        name: "Shimla",
        slug: "ambulance-service-in-shimla",
      },
      {
        name: "Manali",
        slug: "ambulance-service-in-manali",
      },
      {
        name: "Dharamshala",
        slug: "ambulance-service-in-dharamshala",
      },
      {
        name: "Solan",
        slug: "ambulance-service-in-solan",
      },
      {
        name: "Mandi",
        slug: "ambulance-service-in-mandi",
      },
    ],
  },
  {
    name: "Jammu Kashmir",
    slug: "ambulance-service-in-jammu-kashmir",
    places: [
      {
        name: "Jammu Kashmir",
    slug: "ambulance-service-in-jammu-kashmir",
      },
      {
        name: "Jammu",
        slug: "ambulance-service-in-jammu",
      },
      {
        name: "Srinagar",
        slug: "ambulance-service-in-srinagar",
      },
      {
        name: "Anantnag",
        slug: "ambulance-service-in-anantnag",
      },
    ],
  },
];

export default cities