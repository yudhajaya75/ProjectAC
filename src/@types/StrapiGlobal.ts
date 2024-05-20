export type MediaType = {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
};

export interface MetaData {
  data: {};
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
