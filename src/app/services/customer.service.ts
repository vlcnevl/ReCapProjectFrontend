import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string="https://localhost:44309/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

getCars()
{
  return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
}

}
