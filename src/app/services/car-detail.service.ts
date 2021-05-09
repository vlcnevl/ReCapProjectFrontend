import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  constructor(private httpClient:HttpClient) { }
  apiUrl ="https://localhost:44309/api/"


getCarDetails():Observable<ListResponseModel<CarDetail>>
{
  let newPath = this.apiUrl + "cars/getallcarswithdetails"
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)

}
getCarByBrand(branId:number):Observable<ListResponseModel<CarDetail>>
{
  let newPath= this.apiUrl +"cars/getbybrand?brandId="+branId
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
getCarByCarId(carId:number):Observable<ListResponseModel<CarDetail>>
{
  let newPath = this.apiUrl+"cars/getcardetailsbyid?carId="+carId
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}
getCarByColor(colorId:number):Observable<ListResponseModel<CarDetail>>
{
  let newPath = this.apiUrl + "cars/getbycolor?colorId="+colorId
  return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
}




}
