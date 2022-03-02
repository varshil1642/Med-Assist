import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatModule } from '../mat/mat.module';
import { DoctorRoutingModule } from './doctor-routing.module';

import { DoctorComponent } from './components/doctor/doctor.component';
import { DoctorNavComponent } from './components/doctor-nav/doctor-nav.component';


@NgModule({
  declarations: [
    DoctorComponent,
    DoctorNavComponent
  ],
  imports: [
    CommonModule,
    MatModule,
    DoctorRoutingModule
  ],
  exports: [
    DoctorComponent
  ]
})
export class DoctorModule { }
