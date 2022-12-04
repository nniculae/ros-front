export interface Payment {
  "@id"?: string;
  amount?: string;
  orderContainer?: string;
  paidDate?: Date;
  type?: string;
}
