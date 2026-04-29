import { Bihar } from "./States/Bihar";
import { Chandigarh } from "./States/Chandigarh";
import { Delhi } from "./States/Delhi";
import { Gujarat } from "./States/Gujarat";
import { Jharkhand } from "./States/Jharkhand";
import { Punjab } from "./States/Punjab";

interface Service {
  name: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}



export interface PlaceDetails {
  name: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  pageHeadline?: string;
  subHeadline?: string;
  introParagraph?: string;
  servicesOffered?: Service[];
  whyChooseUs?: string[];
  hospitalsServed?: string[];
  faqs?: FAQ[];
  nearByCities?: string[];
}

export interface City {
  name: string;
  slug: string;
  headOffice?: string;
  places: PlaceDetails[];
}

const cities: City[] = [
  Delhi,
  Bihar,
  Jharkhand,
  Chandigarh,
  Punjab,
  Gujarat
];

export default cities;
