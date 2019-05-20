import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { EntryRenderComponent } from './entry-render/entry-render.component';
import { EntryInputComponent } from './entry-input/entry-input.component';
@NgModule({
  declarations: [
    EntryRenderComponent,
    EntryInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    EntryRenderComponent,
    EntryInputComponent,
  ],
})
export class ComponentsModule { }
