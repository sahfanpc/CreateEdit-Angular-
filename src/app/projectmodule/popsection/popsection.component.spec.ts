import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsectionComponent } from './popsection.component';

describe('PopsectionComponent', () => {
  let component: PopsectionComponent;
  let fixture: ComponentFixture<PopsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
