import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYoursComponent } from './list-yours.component';

describe('ListYoursComponent', () => {
  let component: ListYoursComponent;
  let fixture: ComponentFixture<ListYoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListYoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
