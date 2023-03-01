import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalTemplateComponent } from './formal-template.component';

describe('FormalTemplateComponent', () => {
  let component: FormalTemplateComponent;
  let fixture: ComponentFixture<FormalTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
