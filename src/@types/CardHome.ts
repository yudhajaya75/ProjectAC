import { MediaType } from "./StrapiGlobal";

export type CardHome = {
    id: number;
    attributes: {
        title: string;
        desc: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image: MediaType;
    };
};
