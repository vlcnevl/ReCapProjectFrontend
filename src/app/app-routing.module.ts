import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [

  {path:"",component:CarComponent},
  {path:"brands",component:CarComponent},
  {path:"brands/:brandId",component:CarComponent},
  {path:"colors/:colorId",component:CarComponent},
  {path:"cars/:carId",component:CarDetailComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
