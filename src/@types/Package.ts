import { Feature } from "./ProductVariant";
import { MetaData } from "./StrapiGlobal";

interface IPackage {
  id: number;
  attributes: {
    title: string;
    shortDescription: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    access: string;
    isPopular: boolean;
    eventDate: Date;
    features: Feature[];
  };
}

interface SinglePackageResponse extends MetaData {
  data: IPackage;
}

interface PackagesResponse extends MetaData {
  data: IPackage[];
}

export { IPackage, PackagesResponse, SinglePackageResponse };
