import { Address } from './addressInterface';

export interface User {
  id: number;
  isAdmin?: boolean;
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  email: string;
  password: string;
  address: Address[];
}

export interface MainInfo {
  id: string;
  isAdmin?: boolean;
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  email: string;
  password: string;
}
