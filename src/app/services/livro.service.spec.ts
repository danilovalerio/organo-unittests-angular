import { Livro } from '../componentes/livro/livro';
import { livros } from '../mock-livros';
import { LivroService } from './livro.service';

//contexto do nosso teste
describe('LivroService', () => {
  //Arrange
  let service: LivroService;
  service = new LivroService();

  //testar se o serviço foi criaido
  it('deveria ser criado', () => {
    //Assert
    expect(service).toBeTruthy();
  });

  it('deveria adicionar um novo livro', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: { id: 'romance', value: 'Romance' },
      dataLeitura: '2024-04-19',
      classificacao: 5,
    };

    service.adicionarLivro(novoLivro);

    const livrosPorGenero = service.obterLivrosPorGenero('romance');
    expect(livrosPorGenero).toContain(novoLivro);
  });

  it('deveria recuperar corretamente os livros por gênero', () => {
    const livrosPorGenero = service.obterLivrosPorGenero('romance');

    //Faz um filtro no mock de livros para trazer somente os de romance
    const livrosEsperados = livros.filter(
      (livro) => livro.genero.id === 'romance'
    );

    expect(livrosPorGenero).toEqual(livrosEsperados);
  });
});
