import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbDetailComponent } from './bb-detail.component';

describe('BbDetailComponent', () => {
  let component: BbDetailComponent;
  let fixture: ComponentFixture<BbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
