import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideH2OComponent } from './provide-h2-o.component';

describe('ProvideH2OComponent', () => {
  let component: ProvideH2OComponent;
  let fixture: ComponentFixture<ProvideH2OComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideH2OComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideH2OComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
