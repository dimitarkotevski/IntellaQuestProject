import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCategoryPickerComponent } from './my-category-picker.component';

describe('MyCategoryPickerComponent', () => {
  let component: MyCategoryPickerComponent;
  let fixture: ComponentFixture<MyCategoryPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCategoryPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCategoryPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
