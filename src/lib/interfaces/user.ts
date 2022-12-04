export interface User {
  "@id"?: string;
  email: string;
  roles?: any;
  password: string;
  readonly addresses?: any;
}
