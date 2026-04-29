# fc-clean-architecture

Implementacao do desafio "Clean Architecture: Use Cases para a Entidade Product".

## Requisitos

- Node.js LTS (recomendado: 18 ou 20)
- npm

## Instalacao

```bash
npm install
```

## Rodando os testes

Suite completa do projeto:

```bash
npm test
```

Somente os testes de Product (use cases + integracao):

```bash
npm test -- src/usecase/product
```

## Escopo implementado para Product

- Use case de criacao (`CreateProductUseCase`)
- Use case de busca por id (`FindProductUseCase`)
- Use case de listagem (`ListProductUseCase`)
- Use case de atualizacao (`UpdateProductUseCase`)

Cada use case possui:

- teste unitario (com mock de repositorio)
- teste de integracao (fluxo completo com Sequelize + sqlite em memoria)
