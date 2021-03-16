import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http'
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
 
 apiUrl:string="https://localhost:44309/api/brands/getall";

  constructor(private httpClient:HttpClient) { }


  getBrands():Observable<BrandResponseModel>
  {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }

}

