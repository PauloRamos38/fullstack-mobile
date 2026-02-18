# Documentação da API 📚

## Base URL

```
http://localhost:3000
```

## Endpoints

### 1. Informações da API

Retorna informações gerais sobre a API.

**Endpoint:** `GET /`

**Resposta de Sucesso:**
```json
{
  "message": "Bem-vindo à API Fullstack Mobile Training!",
  "version": "1.0.0",
  "endpoints": {
    "users": "/api/users",
    "userById": "/api/users/:id"
  }
}
```

---

### 2. Listar Todos os Usuários

Retorna uma lista com todos os usuários cadastrados.

**Endpoint:** `GET /api/users`

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Paulo Ramos",
      "email": "paulo@example.com",
      "role": "Desenvolvedor Fullstack"
    },
    {
      "id": 2,
      "name": "Maria Silva",
      "email": "maria@example.com",
      "role": "Designer"
    }
  ]
}
```

**Exemplo cURL:**
```bash
curl http://localhost:3000/api/users
```

---

### 3. Buscar Usuário por ID

Retorna os dados de um usuário específico.

**Endpoint:** `GET /api/users/:id`

**Parâmetros:**
- `id` (number, required) - ID do usuário

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Paulo Ramos",
    "email": "paulo@example.com",
    "role": "Desenvolvedor Fullstack"
  }
}
```

**Resposta de Erro (404):**
```json
{
  "success": false,
  "message": "Usuário não encontrado"
}
```

**Exemplo cURL:**
```bash
curl http://localhost:3000/api/users/1
```

---

### 4. Criar Novo Usuário

Cria um novo usuário no sistema.

**Endpoint:** `POST /api/users`

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "role": "Desenvolvedor Mobile"
}
```

**Campos:**
- `name` (string, required) - Nome do usuário
- `email` (string, required) - Email do usuário
- `role` (string, optional) - Função/cargo do usuário (default: "Usuário")

**Resposta de Sucesso (201):**
```json
{
  "success": true,
  "message": "Usuário criado com sucesso",
  "data": {
    "id": 4,
    "name": "João Silva",
    "email": "joao@example.com",
    "role": "Desenvolvedor Mobile"
  }
}
```

**Resposta de Erro (400):**
```json
{
  "success": false,
  "message": "Nome e email são obrigatórios"
}
```

**Exemplo cURL:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@example.com",
    "role": "Desenvolvedor Mobile"
  }'
```

---

### 5. Atualizar Usuário

Atualiza os dados de um usuário existente.

**Endpoint:** `PUT /api/users/:id`

**Parâmetros:**
- `id` (number, required) - ID do usuário

**Headers:**
```
Content-Type: application/json
```

**Body:**
```json
{
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "role": "Senior Developer"
}
```

**Campos:**
- `name` (string, optional) - Novo nome do usuário
- `email` (string, optional) - Novo email do usuário
- `role` (string, optional) - Nova função/cargo do usuário

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Usuário atualizado com sucesso",
  "data": {
    "id": 1,
    "name": "João Silva Atualizado",
    "email": "joao.novo@example.com",
    "role": "Senior Developer"
  }
}
```

**Resposta de Erro (404):**
```json
{
  "success": false,
  "message": "Usuário não encontrado"
}
```

**Exemplo cURL:**
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva Atualizado",
    "email": "joao.novo@example.com",
    "role": "Senior Developer"
  }'
```

---

### 6. Remover Usuário

Remove um usuário do sistema.

**Endpoint:** `DELETE /api/users/:id`

**Parâmetros:**
- `id` (number, required) - ID do usuário

**Resposta de Sucesso (200):**
```json
{
  "success": true,
  "message": "Usuário removido com sucesso"
}
```

**Resposta de Erro (404):**
```json
{
  "success": false,
  "message": "Usuário não encontrado"
}
```

**Exemplo cURL:**
```bash
curl -X DELETE http://localhost:3000/api/users/1
```

---

## Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | OK - Requisição bem-sucedida |
| 201 | Created - Recurso criado com sucesso |
| 400 | Bad Request - Dados inválidos |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro no servidor |

## Formato de Resposta Padrão

Todas as respostas seguem o formato:

**Sucesso:**
```json
{
  "success": true,
  "data": { /* dados retornados */ },
  "message": "Mensagem opcional"
}
```

**Erro:**
```json
{
  "success": false,
  "message": "Descrição do erro"
}
```

## CORS

A API está configurada para aceitar requisições de qualquer origem (CORS habilitado).

## Testando com Ferramentas

### Postman

1. Importe a coleção de endpoints
2. Configure a base URL: `http://localhost:3000`
3. Execute as requisições

### Insomnia

1. Crie um novo workspace
2. Configure os endpoints manualmente
3. Teste cada operação CRUD

### JavaScript/Fetch

```javascript
// GET - Listar usuários
fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(data => console.log(data));

// POST - Criar usuário
fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Novo Usuário',
    email: 'novo@example.com',
    role: 'Developer'
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// DELETE - Remover usuário
fetch('http://localhost:3000/api/users/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## Melhorias Futuras

- [ ] Autenticação JWT
- [ ] Paginação
- [ ] Filtros e busca
- [ ] Validação mais robusta
- [ ] Rate limiting
- [ ] Documentação Swagger/OpenAPI
- [ ] Testes automatizados
- [ ] Persistência em banco de dados

---

**Desenvolvido para fins educacionais 📚**
