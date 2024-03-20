import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component'; // Ensure this path is correct

import { TemplateRoutingModule } from './template-routing.module';


@NgModule({
  // declarations: [TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    TemplateComponent
  ]
})
export class TemplateModule { }
