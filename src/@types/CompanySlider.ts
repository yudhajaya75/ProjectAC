import { MediaType, MetaData } from "./StrapiGlobal";

interface ICompanySlide {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
}

interface CompanySliderResponse extends MetaData {
  data: ICompanySlide[];
}

export { ICompanySlide, CompanySliderResponse };
