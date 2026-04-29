# fc-clean-architecture

Implementacao dos desafios de Clean Architecture para a entidade Product.

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

Somente o teste E2E da API de Product:

```bash
npm test -- src/infrastructure/api/__tests__/product.e2e.spec.ts
```

## Rodando a API

```bash
npm run dev
```

Endpoint implementado:

```bash
GET /product
```

Resposta suportada:

- JSON

## Escopo implementado para Product

- Use case de criacao (`CreateProductUseCase`)
- Use case de busca por id (`FindProductUseCase`)
- Use case de listagem (`ListProductUseCase`)
- Use case de atualizacao (`UpdateProductUseCase`)
- Endpoint de listagem (`GET /product`)

Cada use case possui:

- teste unitario (com mock de repositorio)
- teste de integracao (fluxo completo com Sequelize + sqlite em memoria)

O endpoint de Product possui:

- teste E2E em JSON
