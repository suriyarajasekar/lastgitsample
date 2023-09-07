import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsssComponent } from './ssss.component';

describe('SsssComponent', () => {
  let component: SsssComponent;
  let fixture: ComponentFixture<SsssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsssComponent]
    });
    fixture = TestBed.createComponent(SsssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
