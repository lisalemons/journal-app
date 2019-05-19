import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }