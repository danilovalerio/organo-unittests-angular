import { TestBed } from '@angular/core/testing';
import { GeneroLiterario, Livro } from '../componentes/livro/livro';
import { livros } from '../mock-livros';
import { ErroGeneroLiterario, LivroService } from './livro.service';

//contexto do nosso teste
describe('LivroService', () => {
  //Arrange
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivroService],
    });
    service = TestBed.inject(LivroService);
  });

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

  it('deveria inicializar os gêneros corretamente', () => {
    const generosEsperados: GeneroLiterario[] = [
      { id: 'romance', value: 'Romance' },
      { id: 'misterio', value: 'Mistério' },
      { id: 'fantasia', value: 'Fantasia' },
      { id: 'ficcao-cientifica', value: 'Ficção Científica' },
      { id: 'tecnicos', value: 'Técnicos' },
    ];

    expect(generosEsperados).toEqual(service.generos);
  });

  it('deveria lancar um erro ao tentar cadastrar livro com genero desconhecido', () => {
    const novoLivro: Livro = {
      titulo: 'Novo Livro',
      autoria: 'Autor Desconhecido',
      imagem: 'http://example.com/cover.jpg',
      genero: { id: 'nao-existe', value: 'Não Existe' },
      dataLeitura: '2024-04-19',
      classificacao: 5,
    };

    expect(() => service.adicionarLivro(novoLivro)).toThrow(
      ErroGeneroLiterario
    );
  });
});
