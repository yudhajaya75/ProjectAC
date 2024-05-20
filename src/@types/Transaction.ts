import { Feature, IVariant } from "./ProductVariant";
import { MediaType, MetaData } from "./StrapiGlobal";

interface IProduct {
  data: {
    id: number;
    attributes: {
      title: string;
      body: string;
      category: string;
      slug: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
    };
  };
}

interface IOrder {
  id: number;
  product: IProduct;
  amount: string;
}

interface ITransaction {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    orders: IOrder[];
    users: {
      data: {
        id: number;
      };
    };
    payment: {
      id: number;
      statusPayment: "paid" | "unpaid";
      totalPrice: number;
    };
    product_variant: {
      data: {
        id: number;
        attributes: {
          title: string;
          price: number;
          isPopuler: Boolean;
          eventDate: Date;
          content: string;
          createdAt: Date;
          updatedAt: Date;
          publishedAt: Date;
          access: string;
          features: Feature[];
        };
      };
    };
    paymentReceiptImage: MediaType;
  };
}

interface TransactionResponse extends MetaData {
  data: ITransaction[];
}

export { TransactionResponse, ITransaction, IOrder, IProduct };
