import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicindexComponent } from './publicindex.component';

describe('PublicindexComponent', () => {
  let component: PublicindexComponent;
  let fixture: ComponentFixture<PublicindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
