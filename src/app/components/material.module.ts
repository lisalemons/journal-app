import { NgModule } from '@angular/core';
import {
  MatButtonModule,
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
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
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