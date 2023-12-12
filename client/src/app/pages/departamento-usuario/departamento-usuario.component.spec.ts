import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoUsuarioComponent } from './departamento-usuario.component';

describe('DepartamentoUsuarioComponent', () => {
  let component: DepartamentoUsuarioComponent;
  let fixture: ComponentFixture<DepartamentoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartamentoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
