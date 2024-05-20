import { MediaType } from "./StrapiGlobal";

export type Questions = {
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
