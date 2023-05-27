# API Agendify

Uma API RESTful para gerenciar contatos e autenticação de usuários no Agendify.

## Endpoints do serviço

A seguir estão os endpoints disponíveis neste serviço:

POST /users: Criação de usuário.\
GET /users: Lista todos os usuários.\
GET /users/profile: Lista o usuário logado.\
PATCH /users/:id: Atualiza um usuário.\
DELETE /users/:id: Realiza um soft delete no usuário.\
POST /login: Gera o token de autenticação.\
POST /contacts: Cria um contato.\
GET /contacts: Lista todos os contatos criados pelo usuario logado.\
PATCH /contacts/:id: Atualiza um contato.\
DELETE /contacts/:id: eleta um contato.\

## Como executar o Projeto

1. Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm install

# caso use yarn
yarn
```

2. Configure as variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.
- Preencha as variáveis de ambiente no arquivo .env com as informações corretas.

3. Execute as migrações do banco de dados:

```bash
# caso use npm
npm run migrate

# caso use yarn
yarn run migrate
```

4. Inicie o servidor:

```bash
# caso use npm
npm run dev

# caso use yarn
yarn dev
```

5. O serviço estará disponível em http://localhost:3000.
