import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }