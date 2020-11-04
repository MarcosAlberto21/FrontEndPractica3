import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonRegalarComponent } from './boton-regalar.component';

describe('BotonRegalarComponent', () => {
  let component: BotonRegalarComponent;
  let fixture: ComponentFixture<BotonRegalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonRegalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonRegalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
