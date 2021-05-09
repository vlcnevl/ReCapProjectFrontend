import { CarImage } from "./carImage";

export interface CarDetail{
    carId:number;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    modelYear:number;
    descriptions:string;
    fuel:string;
    carImages:CarImage[];
}