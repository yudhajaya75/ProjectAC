import { MediaType } from "./StrapiGlobal";

export type PersonalCard = {
    id: number;
    attributes: {
        name: string;
        body: string;
        medsos_1: string;
        medsos_2: string;
        title: string;
        desc: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        image: MediaType;
    };
};
