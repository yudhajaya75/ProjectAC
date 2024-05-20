export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Order {
  id: number;
  product: {
    data: {
      attributes: {
        title: string;
      };
    };
  };
  amount: string;
}

interface User {
  id: number;
  attributes: {
    username: string;
    email: string;
    provider: string;
    confirmed: boolean;
    blocked: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

interface Payment {
  id: number;
  statusPayment: string;
  totalPrice: string;
}

interface PaymentReceiptImage {
  data: {
    id: number;
    attributes: {
      url: string;
    };
  };
}

export interface Transaction {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    orders: Order[];
    users: {
      data: User;
    };
    payment: Payment;
    paymentReceiptImage: PaymentReceiptImage;
  };
}
