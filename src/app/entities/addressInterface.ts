
export interface Address {
    idAddress: string;
    street: string;
    building: string;
    flat: string;
    city: string;
    country: string;
    postCode: string;
    addressType: AddressType;
}

export interface Country{
    name: string;
}

export enum AddressType{
	BillingAddress = "Billing Address",
	ShipmentAddress = "Shipment Address",
	HomeAddress = "Home Address"
}
 

