import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/reantal';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
apiUrl:string="https://localhost:44309/api/rentals/getallrentaldetails";
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<RentalResponseModel>
  {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }

}

