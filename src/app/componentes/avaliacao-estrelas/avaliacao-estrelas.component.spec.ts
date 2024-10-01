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
});
