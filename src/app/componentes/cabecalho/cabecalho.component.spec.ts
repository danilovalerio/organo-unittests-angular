import { TestBed } from '@angular/core/testing';
import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;

  beforeEach(() => {
    //cria um módulo de testes no angular
    TestBed.configureTestingModule({
      imports: [CabecalhoComponent],
    });
    component = new CabecalhoComponent();
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });
});
