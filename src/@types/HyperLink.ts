import { MediaType } from "./StrapiGlobal";

export type HyperLink = {
    id: number;
    attributes: {
        header: string;
        body: string;
        title: string;
        desc: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        link: string;
        image: MediaType;
    };
};
