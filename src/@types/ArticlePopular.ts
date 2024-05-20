import { MediaType } from "./StrapiGlobal";

export type ArticlePopular = {
    id: number;
    attributes: {
        header: string;
        title: string;
        body: string;
        eye: string;
        slug: string;
        desc: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image: MediaType;
    };
};
