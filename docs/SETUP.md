# Guia de Instalação e Configuração 🛠️

Este guia fornece instruções detalhadas para configurar o ambiente de desenvolvimento do projeto Fullstack Mobile Training.

## Índice

1. [Requisitos do Sistema](#requisitos-do-sistema)
2. [Instalação do Backend](#instalação-do-backend)
3. [Instalação do Mobile](#instalação-do-mobile)
4. [Configuração do Ambiente](#configuração-do-ambiente)
5. [Execução do Projeto](#execução-do-projeto)
6. [Problemas Comuns](#problemas-comuns)

---

## Requisitos do Sistema

### Software Necessário

#### Requisitos Básicos
- **Node.js**: versão 14.x ou superior
- **npm**: versão 6.x ou superior (incluído com Node.js)
- **Git**: para clonar o repositório

#### Para Desenvolvimento Mobile

**Para Android:**
- Android Studio (versão mais recente)
- Android SDK
- JDK 11 ou superior
- Um dispositivo Android ou emulador configurado

**Para iOS (somente macOS):**
- Xcode (versão mais recente)
- CocoaPods
- Simulador iOS ou dispositivo físico

#### Opcional
- **Expo CLI**: Simplifica o desenvolvimento mobile
  ```bash
  npm install -g expo-cli
  ```

### Verificando Instalações

Verifique se tudo está instalado corretamente:

```bash
# Verificar Node.js
node --version
# Saída esperada: v14.x.x ou superior

# Verificar npm
npm --version
# Saída esperada: 6.x.x ou superior

# Verificar Git
git --version
# Saída esperada: git version 2.x.x
```

---

## Instalação do Backend

### Passo 1: Clone o Repositório

```bash
git clone https://github.com/PauloRamos38/fullstack-mobile.git
cd fullstack-mobile
```

### Passo 2: Navegue até o diretório do backend

```bash
cd backend
```

### Passo 3: Instale as dependências

```bash
npm install
```

Isso instalará:
- Express (framework web)
- CORS (middleware para permitir requisições cross-origin)

### Passo 4: Verifique a instalação

```bash
npm list
```

Você deve ver algo como:
```
backend@1.0.0
├── cors@2.8.6
└── express@5.2.1
```

### Passo 5: Teste o servidor

```bash
npm start
```

Você deve ver:
```
🚀 Servidor rodando na porta 3000
📝 Acesse http://localhost:3000
```

Abra seu navegador em `http://localhost:3000` para verificar se a API está respondendo.

---

## Instalação do Mobile

### Passo 1: Navegue até o diretório mobile

```bash
cd ../mobile
```

### Passo 2: Instale as dependências

```bash
npm install
```

Isso instalará:
- React
- React Native

### Passo 3: (Opcional) Instale o Expo CLI

Para facilitar o desenvolvimento, você pode usar o Expo:

```bash
npm install -g expo-cli
```

### Passo 4: Configure o dispositivo/emulador

**Para Android:**

1. Abra o Android Studio
2. Vá em Tools > AVD Manager
3. Crie um novo dispositivo virtual ou use um existente
4. Inicie o emulador

**Para iOS (macOS apenas):**

1. Abra o Xcode
2. Vá em Xcode > Open Developer Tool > Simulator
3. Escolha o dispositivo desejado

**Usando dispositivo físico:**

1. Ative o modo desenvolvedor no seu dispositivo
2. Conecte via USB
3. Autorize a depuração USB

---

## Configuração do Ambiente

### Configurando a URL da API no Mobile

Se você estiver usando um dispositivo físico ou emulador, talvez precise atualizar a URL da API.

Edite o arquivo `mobile/App.js`:

```javascript
// Para emulador Android
const API_URL = 'http://10.0.2.2:3000/api';

// Para dispositivo físico (substitua pelo IP da sua máquina)
const API_URL = 'http://192.168.1.100:3000/api';

// Para emulador iOS ou localhost
const API_URL = 'http://localhost:3000/api';
```

### Descobrindo seu IP local

**Windows:**
```bash
ipconfig
```
Procure por "IPv4 Address"

**macOS/Linux:**
```bash
ifconfig
```
Procure por "inet" na interface de rede ativa

---

## Execução do Projeto

### Executando o Backend

```bash
cd backend
npm start
```

O servidor estará disponível em `http://localhost:3000`

### Executando o Mobile

Em outro terminal:

```bash
cd mobile
npm start
```

#### Para Android:
```bash
npm run android
```

#### Para iOS:
```bash
npm run ios
```

#### Usando Expo (se instalado):
```bash
expo start
```

Então:
- Pressione `a` para Android
- Pressione `i` para iOS
- Escaneie o QR code com o app Expo Go (disponível na Play Store/App Store)

---

## Problemas Comuns

### Problema 1: Porta 3000 já está em uso

**Erro:** `Error: listen EADDRINUSE: address already in use :::3000`

**Solução:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [PID] /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

Ou altere a porta no `backend/server.js`:
```javascript
const PORT = process.env.PORT || 3001; // ou outra porta
```

### Problema 2: Erro de CORS

**Erro:** Access to fetch at 'http://localhost:3000' from origin 'http://localhost:8081' has been blocked by CORS policy

**Solução:** Certifique-se de que o middleware CORS está habilitado no backend (já configurado no projeto).

### Problema 3: Não consegue conectar à API do dispositivo móvel

**Erro:** Network request failed

**Solução:**
1. Certifique-se de que o backend está rodando
2. Verifique se o dispositivo está na mesma rede
3. Use o IP correto da sua máquina
4. Desative firewalls temporariamente para teste

### Problema 4: Módulos não encontrados

**Erro:** `Cannot find module 'express'`

**Solução:**
```bash
# Delete node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Problema 5: Erro ao iniciar o Metro Bundler

**Erro:** Metro Bundler can't listen on port 8081

**Solução:**
```bash
# Limpe o cache do Metro
npx react-native start --reset-cache
```

---

## Estrutura de Desenvolvimento

### Workflow Recomendado

1. **Inicie o backend primeiro**
   ```bash
   cd backend && npm start
   ```

2. **Em outro terminal, inicie o mobile**
   ```bash
   cd mobile && npm start
   ```

3. **Faça suas alterações**
   - Backend: edite `backend/server.js`
   - Mobile: edite `mobile/App.js`

4. **Teste as alterações**
   - Backend: use cURL, Postman ou navegador
   - Mobile: o app recarrega automaticamente

### Hot Reload

- **Backend**: Reinicie o servidor após mudanças
- **Mobile**: As mudanças são refletidas automaticamente

Para hot reload no backend, instale nodemon:
```bash
npm install -g nodemon
nodemon backend/server.js
```

---

## Próximos Passos

Após a instalação bem-sucedida:

1. ✅ Explore a [Documentação da API](API.md)
2. ✅ Teste todos os endpoints
3. ✅ Experimente adicionar novos recursos
4. ✅ Customize a interface do app mobile

---

## Recursos Adicionais

### Documentação Oficial

- [Node.js](https://nodejs.org/docs/)
- [Express](https://expressjs.com/)
- [React Native](https://reactnative.dev/)
- [React](https://react.dev/)

### Tutoriais

- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [Express Tutorial](https://expressjs.com/en/starter/installing.html)

---

## Suporte

Se você encontrar problemas não listados aqui:

1. Verifique as issues no GitHub
2. Consulte a documentação oficial das tecnologias
3. Abra uma nova issue descrevendo o problema

---

**Boa sorte com seu desenvolvimento! 🚀**
