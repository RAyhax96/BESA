import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPorNumeroDeContratoComponent } from './consulta-por-numero-de-contrato.component';

describe('ConsultaPorNumeroDeContratoComponent', () => {
  let component: ConsultaPorNumeroDeContratoComponent;
  let fixture: ComponentFixture<ConsultaPorNumeroDeContratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPorNumeroDeContratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPorNumeroDeContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
