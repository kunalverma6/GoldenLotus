import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurelayoutComponent } from './securelayout.component';

describe('SecurelayoutComponent', () => {
  let component: SecurelayoutComponent;
  let fixture: ComponentFixture<SecurelayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurelayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecurelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
