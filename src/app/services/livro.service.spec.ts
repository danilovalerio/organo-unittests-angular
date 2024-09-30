import { LivroService } from './livro.service';

//contexto do nosso teste
describe('LivroService', () => {
  //Arrange
  let service: LivroService;

  //testar se o serviço foi criaido
  it('deveria ser criado', () => {
    //Act
    //instanciamos o livro service
    service = new LivroService();

    //Assert
    expect(service).toBeTruthy();
  });
});
