export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  role: {
    id: number;
    name: string;
    description: string;
    type: string;
    createdAt: string;
    updatedAt: string;
  };
  transactions: {
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }[];
  avatar: {
    id: number;
    name: string;
    url: string;
  };
}
