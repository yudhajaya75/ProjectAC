import { MediaType, MetaData } from "./StrapiGlobal";

interface IProductVariant {
  id: number;
  attributes: {
    title: string;
    price: number;
    isPopuler: boolean;
    eventDate: Date;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    features: { id: number; feature: string }[];
  };
}

export interface IPelatihan {
  id: number;
  attributes: {
    title: string;
    body: string;
    category: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
    product_variants: { data: IProductVariant[] };
    webinar: {
      eventDuration: string;
      webinarPrice: number;
    };
  };
}

export interface PelatihanResponse extends MetaData {
  data: IPelatihan[];
}
