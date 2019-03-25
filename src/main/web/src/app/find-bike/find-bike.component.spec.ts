import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBikeComponent } from './find-bike.component';

describe('FindBikeComponent', () => {
  let component: FindBikeComponent;
  let fixture: ComponentFixture<FindBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
