import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryRenderComponent } from './entry-render.component';

describe('EntryRenderComponent', () => {
  let component: EntryRenderComponent;
  let fixture: ComponentFixture<EntryRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
