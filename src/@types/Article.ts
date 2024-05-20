import { MediaType, MetaData } from "./StrapiGlobal";

export type Article = {
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

interface ArticleResponse extends MetaData {
  data: Article[];
}

export { ArticleResponse };
