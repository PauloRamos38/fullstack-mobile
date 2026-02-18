# Fullstack Mobile Training 🚀

Bem-vindo ao projeto de treinamento Fullstack Mobile! Este projeto demonstra uma arquitetura completa de aplicação fullstack, incluindo backend API REST e aplicativo mobile.

## 📋 Sobre o Projeto

Este é um projeto de treinamento que implementa um sistema completo de gerenciamento de usuários, composto por:

- **Backend**: API REST desenvolvida com Node.js e Express
- **Mobile**: Aplicativo desenvolvido com React Native
- **Comunicação**: REST API com JSON

## 🎯 Funcionalidades

### Backend API
- ✅ CRUD completo de usuários (Create, Read, Update, Delete)
- ✅ Endpoints RESTful
- ✅ Suporte a CORS
- ✅ Validação de dados
- ✅ Respostas padronizadas em JSON

### Mobile App
- ✅ Listagem de usuários
- ✅ Cadastro de novos usuários
- ✅ Remoção de usuários
- ✅ Interface intuitiva e responsiva
- ✅ Feedback visual (loading, alerts)

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web minimalista
- **CORS**: Middleware para permitir requisições cross-origin

### Mobile
- **React Native**: Framework para desenvolvimento mobile
- **React**: Biblioteca JavaScript para interfaces
- **Fetch API**: Para comunicação com o backend

## 📁 Estrutura do Projeto

```
fullstack-mobile/
├── backend/               # API REST
│   ├── server.js         # Servidor Express
│   ├── package.json      # Dependências do backend
│   └── node_modules/     # Pacotes instalados
│
├── mobile/               # App Mobile
│   ├── App.js           # Componente principal
│   ├── index.js         # Entry point
│   ├── package.json     # Dependências do mobile
│   └── node_modules/    # Pacotes instalados
│
├── docs/                # Documentação
│   ├── API.md          # Documentação da API
│   └── SETUP.md        # Guia de instalação
│
└── README.md           # Este arquivo
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Para desenvolvimento mobile: Android Studio ou Xcode
- Expo CLI (opcional, facilita o desenvolvimento)

### Instalação Rápida

1. **Clone o repositório**
```bash
git clone https://github.com/PauloRamos38/fullstack-mobile.git
cd fullstack-mobile
```

2. **Instale as dependências do Backend**
```bash
cd backend
npm install
```

3. **Instale as dependências do Mobile**
```bash
cd ../mobile
npm install
```

### Executando o Projeto

#### Backend (API)

```bash
cd backend
npm start
```

O servidor estará disponível em: `http://localhost:3000`

#### Mobile (App)

```bash
cd mobile
npm start
```

Para executar no Android:
```bash
npm run android
```

Para executar no iOS:
```bash
npm run ios
```

## 📚 Documentação Adicional

- [Documentação da API](docs/API.md) - Detalhes sobre os endpoints
- [Guia de Setup](docs/SETUP.md) - Instruções detalhadas de instalação

## 🔗 Endpoints da API

### Base URL
```
http://localhost:3000
```

### Principais Endpoints

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Informações da API |
| GET | `/api/users` | Lista todos os usuários |
| GET | `/api/users/:id` | Busca usuário por ID |
| POST | `/api/users` | Cria novo usuário |
| PUT | `/api/users/:id` | Atualiza usuário |
| DELETE | `/api/users/:id` | Remove usuário |

## 🧪 Testando a API

### Usando cURL

Listar usuários:
```bash
curl http://localhost:3000/api/users
```

Criar usuário:
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"João Silva","email":"joao@email.com","role":"Developer"}'
```

## 📱 Recursos do App Mobile

1. **Tela Principal**: Lista todos os usuários cadastrados
2. **Formulário**: Permite cadastrar novos usuários
3. **Ações**: Botão para remover usuários
4. **Feedback**: Indicadores de loading e mensagens de sucesso/erro

## 🎓 Conceitos Aprendidos

Este projeto de treinamento aborda:

- ✅ Desenvolvimento de APIs REST
- ✅ Comunicação entre frontend e backend
- ✅ Gerenciamento de estado no React
- ✅ Requisições HTTP (GET, POST, PUT, DELETE)
- ✅ Componentes React Native
- ✅ Styled Components com StyleSheet
- ✅ Hooks do React (useState, useEffect)
- ✅ Tratamento de erros
- ✅ Interface responsiva

## 🤝 Contribuindo

Este é um projeto de treinamento, mas sugestões são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC.

## 👨‍💻 Autor

**Paulo Ramos**

- GitHub: [@PauloRamos38](https://github.com/PauloRamos38)

## 🙏 Agradecimentos

Projeto desenvolvido como parte do treinamento em desenvolvimento Fullstack Mobile.

---

**Bons estudos! 🚀📱**
