export interface Order {
  "@id"?: string;
  createdDate?: Date;
  orderItems?: string[];
  user?: string;
  payment?: string;
}
