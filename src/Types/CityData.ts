interface CityPageProps  {
    name: string;
    slug: string;
    places?: {
        name: string;
        slug: string;
    }[];
}

export interface LocalCityData {
    name: string;
    slug: string;
}

export default CityPageProps