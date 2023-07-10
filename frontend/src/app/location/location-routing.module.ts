import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinceListComponent } from './province-list/province-list.component';

const routes: Routes = [
  {
    path: 'provinces',
    component: ProvinceListComponent
  },
  {
    path: 'provinces/:autonomyId',
    component: ProvinceListComponent
  },
  
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
