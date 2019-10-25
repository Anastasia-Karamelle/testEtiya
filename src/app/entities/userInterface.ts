import { Address } from './addressInterface';

export interface User{
	firstName: string;
	lastName: string;
	userName: string;
	phone: string;
	email: string;
	password: string;
	address: Address[];
}

export interface mainInfo{
	firstName: string;
	lastName: string;
	userName: string;
	phone: string;
	email: string;
	password: string; 
}