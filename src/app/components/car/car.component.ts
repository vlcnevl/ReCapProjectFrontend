import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  apiUrl ="https://localhost:44309/"
  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  images:CarImage[]=[];
  dataLoaded=true;
  constructor(private carService:CarService ,private carDetailService:CarDetailService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"])
      {
       this.getCarsByBrandId(params["brandId"])
      }  
      else if (params["colorId"])
      {
          this.getCarsByColorId(params["colorId"])
      }

      else{
        this.getAllCars()
      }
    })

  }
 

getAllCars(){
   this.carDetailService.getCarDetails().subscribe(response=>{
    this.carDetails = response.data
  })
}
getCarsByBrandId(brandId:number)
{
  this.carDetailService.getCarByBrand(brandId).subscribe(response=>{
    this.carDetails = response.data
  })
}
getCarsByColorId(colorId:number)
{
  this.carDetailService.getCarByColor(colorId).subscribe(response=>{
    this.carDetails = response.data
  }) 
}



}
