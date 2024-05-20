import { MediaType } from "./StrapiGlobal";

export type BannerHome = {
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
