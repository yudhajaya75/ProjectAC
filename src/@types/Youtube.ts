import { MediaType } from "./StrapiGlobal";

export type Youtube = {
    id: number;
    attributes: {
        header: string;
        desc: string;
        link: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image: MediaType;
    };
};
