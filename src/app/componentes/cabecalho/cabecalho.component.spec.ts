import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(() => {
    //cria um módulo de testes no angular
    TestBed.configureTestingModule({
      imports: [CabecalhoComponent],
    });

    //Cria o component
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deveria definir as propriedades alt e src', () => {
    expect(component.alt).toBeDefined();
    expect(component.src).toBeDefined();
  });

  it('deveria renderizar o conteudo baseado nas propriedades src e alt', () => {
    component.src = 'http://example.com/test-imagem.jpg';
    component.alt = '';

    expect(component).toMatchSnapshot();
  });
});
