import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvaliacaoEstrelasComponent } from './avaliacao-estrelas.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef } from '@angular/core';

describe('AvaliacaoEstrelasComponent', () => {
  let component: AvaliacaoEstrelasComponent;
  let fixture: ComponentFixture<AvaliacaoEstrelasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AvaliacaoEstrelasComponent],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AvaliacaoEstrelasComponent),
          multi: true,
        },
      ],
    });

    fixture = TestBed.createComponent(AvaliacaoEstrelasComponent);
    component = fixture.componentInstance;
    //por padrao no card é somente leitura, porém no form vamos interagir com esta propriedade
    component.readOnly = false;
  });

  it('deveria ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deveria atribuir um valor para classificacao quando o método writeValue for chamado', () => {
    const classificacao = 3;

    //Método que queremos testar
    component.writeValue(classificacao);

    expect(component.classificacao).toBe(classificacao);
  });

  //Método classificar invoca mais 2 métodos, vamos verificar se realmente isso acontece
  it('deveria chamar o onChange quando o método classificar for chamado', () => {
    const nomeDoMetodo = 'onChange';
    const onChangeSpy = jest.spyOn(component, nomeDoMetodo);
    const classificacao = 4;

    component.classificar(classificacao);
    expect(onChangeSpy).toHaveBeenCalled();
  });

  it('deveria chamar o onTouched quando o método classificar for chamado', () => {
    const nomeDoMetodo = 'onTouched';
    const onTouchedSpy = jest.spyOn(component, nomeDoMetodo);
    const classificacao = 4;

    component.classificar(classificacao);
    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('não deveria atualizar a classificação quando a propriedade readonly for true', () => {
    const nomeDoMetodo = 'onChange';
    component.readOnly = true;
    const onChangeSpy = jest.spyOn(component, nomeDoMetodo);
    const classificacao = 5;

    component.classificar(classificacao);
    expect(onChangeSpy).not.toHaveBeenCalled();
    expect(component.classificacao).not.toBe(classificacao);
  });

  it('deveria ignorar valores inválidos e atribuir o valor 1 à classificação', () => {
    const valoresInvalidos = [0, 'aaah', undefined, -6, 6];

    valoresInvalidos.forEach((valorInvalido) => {
      component.writeValue(valorInvalido as any);
      expect(component.classificacao).toBe(1);
    });
  });

  //classe filled no CSS
  it('deveria atualizar o DOM quando a classificação muda', () => {
    const classificacao = 3;
    //aqui muda o estado interno do component não o dom
    component.classificar(classificacao);

    //para verificar atualizações no dom
    fixture.detectChanges();

    //ira validar se ao passar uma classificacao de estrelas ira conter essa classe que pinta a estrela de amarelo
    const estrelaPreenchida = fixture.nativeElement.querySelector('.filled');
    expect(estrelaPreenchida).toBeTruthy();
  });
});
