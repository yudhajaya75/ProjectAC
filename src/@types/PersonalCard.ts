import { MediaType } from "./StrapiGlobal";

export type PersonalCard = {
  id: number;
  attributes: {
    name: string;
    body: string;
    medsos1: string;
    medsos2: string;
    title: string;
    desc: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
};
