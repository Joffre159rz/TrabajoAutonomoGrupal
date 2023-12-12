import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoDeterminadoComponent } from './proceso-determinado.component';

describe('ProcesoDeterminadoComponent', () => {
  let component: ProcesoDeterminadoComponent;
  let fixture: ComponentFixture<ProcesoDeterminadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoDeterminadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoDeterminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
