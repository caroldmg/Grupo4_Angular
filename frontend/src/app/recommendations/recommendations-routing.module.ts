import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {
    path: 'banner',
    component: BannerComponent
  },
  {
    path: '', redirectTo: 'banner', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'banner', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendationsRoutingModule { }
