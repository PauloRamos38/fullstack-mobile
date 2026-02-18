# API REST - Fullstack Mobile

Documentação completa da API REST do projeto Fullstack Mobile.

## Base URL

```
http://localhost:3000
```

## Endpoints

### 1. Informações da API

**GET** `/`

Retorna informações básicas sobre a API.

**Resposta:**
```json
{
  "message": "Fullstack Mobile API",
  "version": "1.0.0",
  "endpoints": {
    "users": "/api/users",
    "user": "/api/users/:id"
  }
}
```

---

### 2. Listar Todos os Usuários

**GET** `/api/users`

Retorna a lista completa de usuários cadastrados.

**Resposta de Sucesso:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@email.com",
      "role": "Developer"
    }
  ],
  "count": 1
}
```

**Exemplo (cURL):**
```bash
curl http://localhost:3000/api/users
```

---

### 3. Buscar Usuário por ID

**GET** `/api/users/:id`

Retorna os dados de um usuário específico.

**Parâmetros:**
- `id` (número) - ID do usuário

**Resposta de Sucesso:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "Developer"
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

**Exemplo (cURL):**
```bash
curl http://localhost:3000/api/users/1
```

---

### 4. Criar Novo Usuário

**POST** `/api/users`

Cria um novo usuário no sistema.

**Body (JSON):**
```json
{
  "name": "Maria Santos",
  "email": "maria@email.com",
  "role": "Designer"
}
```

**Campos Obrigatórios:**
- `name` (string) - Nome completo do usuário
- `email` (string) - Email único do usuário
- `role` (string) - Cargo/função do usuário

**Resposta de Sucesso (201):**
```json
{
  "success": true,
  "message": "Usuário criado com sucesso",
  "data": {
    "id": 4,
    "name": "Maria Santos",
    "email": "maria@email.com",
    "role": "Designer"
  }
}
```

**Resposta de Erro (400):**
```json
{
  "success": false,
  "message": "Nome, email e cargo são obrigatórios"
}
```

ou

```json
{
  "success": false,
  "message": "Email já cadastrado"
}
```

**Exemplo (cURL):**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Maria Santos","email":"maria@email.com","role":"Designer"}'
```

---

### 5. Atualizar Usuário

**PUT** `/api/users/:id`

Atualiza os dados de um usuário existente.

**Parâmetros:**
- `id` (número) - ID do usuário

**Body (JSON):**
```json
{
  "name": "João Pedro Silva",
  "email": "joao.pedro@email.com",
  "role": "Senior Developer"
}
```

**Campos Opcionais:**
- `name` (string) - Novo nome
- `email` (string) - Novo email
- `role` (string) - Novo cargo

**Resposta de Sucesso:**
```json
{
  "success": true,
  "message": "Usuário atualizado com sucesso",
  "data": {
    "id": 1,
    "name": "João Pedro Silva",
    "email": "joao.pedro@email.com",
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

**Exemplo (cURL):**
```bash
curl -X PUT http://localhost:3000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"João Pedro Silva","role":"Senior Developer"}'
```

---

### 6. Remover Usuário

**DELETE** `/api/users/:id`

Remove um usuário do sistema.

**Parâmetros:**
- `id` (número) - ID do usuário

**Resposta de Sucesso:**
```json
{
  "success": true,
  "message": "Usuário removido com sucesso",
  "data": {
    "id": 1,
    "name": "João Silva",
    "email": "joao@email.com",
    "role": "Developer"
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

**Exemplo (cURL):**
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

---

## Formato de Resposta Padrão

Todas as respostas seguem o formato:

```json
{
  "success": boolean,
  "message": "string (opcional)",
  "data": object | array,
  "count": number (apenas em listagens)
}
```

---

## Testando a API

### Usando Postman

1. Importe a coleção de requests
2. Configure a base URL para `http://localhost:3000`
3. Execute as requisições

### Usando Insomnia

1. Crie um novo workspace
2. Adicione as requisições conforme documentado
3. Teste cada endpoint

### Usando Thunder Client (VS Code)

1. Instale a extensão Thunder Client
2. Crie uma nova coleção
3. Adicione e teste as requisições

---

## CORS

A API está configurada com CORS habilitado, permitindo requisições de qualquer origem durante o desenvolvimento.

---

## Observações

- Os dados são armazenados em memória (array JavaScript)
- Ao reiniciar o servidor, os dados voltam ao estado inicial
- Para produção, recomenda-se usar um banco de dados real (MongoDB, PostgreSQL, etc.)
