import { MetaData } from "./StrapiGlobal";

interface Feature {
  id: number;
  feature: string;
}

interface IVariant {
  id: number;
  title: string;
  price: number;
  isPopuler: false;
  eventDate: Date;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  features: Feature[];
  access: string;
}

interface ProductVariantSingleResponse extends MetaData {
  data: {
    id: number;
    attributes: IVariant;
  };
}

export { Feature, IVariant, ProductVariantSingleResponse };
