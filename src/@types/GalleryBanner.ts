import { MediaType } from "./StrapiGlobal";

export type GalleryBanner = {
  id: number;
  attributes: {
    header: string;
    desc: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
};
