import { Address } from "./address.type.ts";
import {Company} from "./company.type.ts";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
