import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl:string="https://localhost:44309/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

getCars()
{
  return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
}

}
