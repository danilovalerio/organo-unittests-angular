# Organo

O Organo é um aplicativo organizador de leituras que permite cadastrar livros, incluindo informações como título, autoria, imagem, gênero, data da leitura e classificação.

## 🔨 Funcionalidades do projeto

`Cadastro de livros`: Permite adicionar novos livros à lista, inserindo informações como título, autoria, imagem, gênero, data da leitura e classificação.

`Listagem de livros`: Exibe os livros cadastrados, separados por gênero literário, exibindo a imagem e demais informações.

## ✔️ Técnicas e tecnologias utilizadas

As técnicas e tecnologias utilizadas pra isso são:

`Angular`: Framework utilizado para construir a aplicação, na versão 17.

`Jest`: Estrutura de teste utilizada para realizar testes de unidade.

## 📁 Link do Figma

Você pode [acessar o figma do projeto aqui](https://www.figma.com/file/GYv8FnRc51ZDfGmi2zzaQb/Organo-%7C-Angular?type=design&node-id=134-128&mode=design).

## 🛠️ Abrir e rodar o projeto

Você vai precisar do NodeJS, versão 18 ou maior.
Após baixar o projeto, você precisa instalar as dependências utilizando o comando:

```bash
npm install
```

Depois, para executar o projeto em modo desenvolvimento:

`bash
ng serve
`

Então, acesse [http://localhost:4200/](url) no seu navegador.

## Compile Components

- Se você estiver usando ambientes de desenvolvimento é usar, caso seja só via CLI não há necessidade, segue docummentação [https://angular.dev/guide/testing/components-scenarios#calling-compilecomponents](Documentação)

## Cobertura de Tests

ng test --coverage

## Links Úteis

- [Documentação oficial do Angular](https://angular.dev/)
- [Documentação oficial do Jest](https://jestjs.io/pt-BR/)
- [Moving Angular CLI to Jest and Web Test Runner](https://blog.angular.io/moving-angular-cli-to-jest-and-web-test-runner-ef85ef69ceca)

>
>  Este artigo no blog oficial do Angular descreve as vantagens de mover o Angular CLI para utilizar o Jest e o Web Test Runner. Ele explica os benefícios de desempenho, a simplificação da configuração de testes e como essa mudança pode melhorar a experiência de desenvolvimento.
>
- [Por que e o que é possível testar](https://www.alura.com.br/artigos/por-que-e-o-que-e-possivel-testar)
- [Dicas de Testes Unitários e de Integração no Front-end](https://www.alura.com.br/artigos/dicas-desenvolver-testes-unitarios-integracao-front-end)
