import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetH2OComponent } from './get-h2-o.component';

describe('GetH2OComponent', () => {
  let component: GetH2OComponent;
  let fixture: ComponentFixture<GetH2OComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetH2OComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetH2OComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
