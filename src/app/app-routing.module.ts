import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ProductoComponent } from './producto/producto.component';
import {ServiceComponent} from './service/service.component';
const routes: Routes = [
  {path:'service', component:ServiceComponent},
  {path:'producto', component:ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
