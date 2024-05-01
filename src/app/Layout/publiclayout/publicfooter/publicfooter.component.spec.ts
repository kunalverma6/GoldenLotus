import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicfooterComponent } from './publicfooter.component';

describe('PublicfooterComponent', () => {
  let component: PublicfooterComponent;
  let fixture: ComponentFixture<PublicfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
