import { Bihar } from "./States/Bihar";
import { Chandigarh } from "./States/Chandigarh";
import { Delhi } from "./States/Delhi";
import { Gujarat } from "./States/Gujarat";
import { HimachalPradesh } from "./States/HimachalPradesh";
import { Jharkhand } from "./States/Jharkhand";
import { MadhyaPradesh } from "./States/MadhyaPradesh";
import { Odisha } from "./States/Odisha";
import { Punjab } from "./States/Punjab";
import { Rajasthan } from "./States/Rajasthan";
import { Uttarakhand } from "./States/Uttarakhand";
import { UttarPradesh } from "./States/UttarPradesh";

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
  UttarPradesh,
  Jharkhand,
  Chandigarh,
  Punjab,
  Gujarat,
  Odisha,
  Uttarakhand,
  Rajasthan,
  HimachalPradesh,
  MadhyaPradesh,
];

export default cities;
