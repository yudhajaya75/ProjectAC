import { MediaType } from "./StrapiGlobal";

export type GalleryBanner = {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
};
