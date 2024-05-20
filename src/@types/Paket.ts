import { MediaType } from "./StrapiGlobal";

export type Paket = {
    id: number;
    attributes: {
        title: string;
        price: number;
        isPopuler: boolean;
        eventDate: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        features: { id: number; feature: string }[];
        image: MediaType;
    };
};
