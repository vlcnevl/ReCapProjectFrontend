import { Time } from "@angular/common";

export interface Rental{
    rentalId:number;
    carName:string;
    customerName:string;
    rentDate:Date;
    returnDate:Date;
}