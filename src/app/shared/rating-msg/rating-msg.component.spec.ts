import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingMsgComponent } from './rating-msg.component';

describe('RatingMsgComponent', () => {
  let component: RatingMsgComponent;
  let fixture: ComponentFixture<RatingMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
