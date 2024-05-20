import { MetaData } from "./StrapiGlobal";

interface IContact {
  id: number;
  attributes: {
    phone: string;
    email: string;
    adress: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

interface ContactResponse extends MetaData {
  data: IContact;
}

export { ContactResponse, IContact };
