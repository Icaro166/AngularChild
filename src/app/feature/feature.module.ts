import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';

@NgModule({
  declarations: [
    FeatureComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
