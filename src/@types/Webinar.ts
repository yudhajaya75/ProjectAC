import { MediaType, MetaData } from "./StrapiGlobal";

export interface IWebinar {
  id: 13;
  attributes: {
    title: string;
    body: string;
    category: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
    product_variants: {
      data: [];
    };
    webinar: {
      id: number;
      eventDuration: string;
      webinarPrice: number;
    };
  };
}

export interface WebinarResponse extends MetaData {
  data: IWebinar[];
}
