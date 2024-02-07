export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Seller = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  date: string;
  amount: number;
  seller: string;
  status: 'awaiting' | 'fulfilled';
};

export type Income = {
  month: string;
  income: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  email: string;
  amount: string;
  image_url: string;
};

export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  name: string;
  date: string;
  email: string;
  amount: number;
  seller_id: string;
  image_url: string;
  status: 'awaiting' | 'fulfilled';
};

export type SellersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_awaiting: number;
  total_fulfilled: number;
};

export type FormattedSellersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_awaiting: string;
  total_fulfilled: string;
};

export type SellerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  amount: number;
  seller_id: string;
  status: 'awaiting' | 'fulfilled';
};
