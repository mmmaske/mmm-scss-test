import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssNestingComponent } from './scss-nesting.component';

describe('ScssNestingComponent', () => {
  let component: ScssNestingComponent;
  let fixture: ComponentFixture<ScssNestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssNestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssNestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
