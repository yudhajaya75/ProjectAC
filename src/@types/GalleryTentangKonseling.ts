import { MediaType } from "./StrapiGlobal";

export type GalleryTentangKonseling = {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
};
