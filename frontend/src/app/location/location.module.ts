import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LocationRoutingModule } from './location-routing.module';
import { ProvinceListComponent } from './province-list/province-list.component';
import { ProvinceGalleryComponent } from './province-gallery/province-gallery.component';
import { TownListComponent } from './town-list/town-list.component';


@NgModule({
  declarations: [
    ProvinceListComponent,
    ProvinceGalleryComponent,
    TownListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }