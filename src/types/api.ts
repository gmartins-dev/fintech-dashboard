export type Asset = {
  id: string;
  name: string;
  type: 'stock' | 'crypto' | 'fiat';
};

export type Price = {
  id: string;
  asset: string;
  price: number;
};

export type Position = {
  id: number;
  asset: string;
  quantity: number;
  asOf: string;
  price: number;
};

export type Portfolio = {
  id: string;
  asOf: string;
  positions: Position[];
};

export type LoginCredentials = {
  username: string;
  password: string;
};
