import { MediaType } from "./StrapiGlobal";

export type GalleryTentangKonseling = {
  id: number;
  attributes: {
    header: string;
    body: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    image: MediaType;
  };
};
