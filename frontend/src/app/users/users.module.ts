import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { AvatarComponent } from './avatar/avatar.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

import {ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MAT_RADIO_DEFAULT_OPTIONS, MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';

import { LocationModule } from '../location/location.module';

@NgModule({
  declarations: [
    UserFormComponent,
    UserProfileComponent,
    AvatarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDividerModule,
    LocationModule
  ],
  providers: [
    { provide:  MAT_DATE_LOCALE, useValue : 'es-ES' },
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: {color: 'primary'}},
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: {color: 'primary'} }
  ]
})
export class UsersModule { 
  
}