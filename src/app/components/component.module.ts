import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryRenderComponent } from './entry-render/entry-render.component';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [
    EntryRenderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    EntryRenderComponent,
  ],
})
export class ComponentModule { }
