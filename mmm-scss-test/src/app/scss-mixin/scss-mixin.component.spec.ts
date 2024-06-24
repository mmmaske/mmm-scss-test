import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssMixinComponent } from './scss-mixin.component';

describe('ScssMixinComponent', () => {
  let component: ScssMixinComponent;
  let fixture: ComponentFixture<ScssMixinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScssMixinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssMixinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
