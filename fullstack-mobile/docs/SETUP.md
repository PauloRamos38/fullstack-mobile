# Guia de Instalação e Configuração

Este guia fornece instruções detalhadas para configurar o ambiente de desenvolvimento do projeto Fullstack Mobile.

## Pré-requisitos

### Software Necessário

1. **Node.js** (v14 ou superior)
   - Download: https://nodejs.org/
   - Verifique a instalação: `node --version`

2. **npm** (geralmente vem com Node.js)
   - Verifique a instalação: `npm --version`

3. **Git**
   - Download: https://git-scm.com/
   - Verifique a instalação: `git --version`

### Para Desenvolvimento Mobile

4. **Expo CLI** (opcional, mas recomendado)
   ```bash
   npm install -g expo-cli
   ```

5. **Android Studio** (para Android)
   - Download: https://developer.android.com/studio
   - Configure o Android SDK

6. **Xcode** (para iOS, apenas macOS)
   - Disponível na App Store
   - Instale as ferramentas de linha de comando

---

## Instalação Passo a Passo

### 1. Clonar o Repositório

```bash
git clone https://github.com/PauloRamos38/fullstack-mobile.git
cd fullstack-mobile
```

### 2. Configurar o Backend

#### 2.1. Navegar para a pasta do backend
```bash
cd backend
```

#### 2.2. Instalar dependências
```bash
npm install
```

Dependências instaladas:
- `express` - Framework web
- `cors` - Middleware para CORS

#### 2.3. Iniciar o servidor
```bash
npm start
```

O servidor estará rodando em: http://localhost:3000

**Modo desenvolvimento (com auto-reload):**
```bash
npm install -g nodemon
npm run dev
```

---

### 3. Configurar o Mobile

#### 3.1. Navegar para a pasta mobile
```bash
cd ../mobile
```

#### 3.2. Instalar dependências
```bash
npm install
```

Dependências principais:
- `react` - Biblioteca JavaScript
- `react-native` - Framework mobile
- `expo` - Plataforma para React Native

#### 3.3. Configurar a URL da API

Edite o arquivo `App.js` e atualize a constante `API_URL`:

```javascript
// Para Android Emulator
const API_URL = 'http://10.0.2.2:3000/api/users';

// Para iOS Simulator ou dispositivo físico
const API_URL = 'http://SEU_IP_LOCAL:3000/api/users';

// Exemplo: http://192.168.1.100:3000/api/users
```

**Como descobrir seu IP local:**
- Windows: `ipconfig`
- macOS/Linux: `ifconfig` ou `ip addr`

#### 3.4. Iniciar o app
```bash
npm start
```

Isso abrirá o Expo Dev Tools no navegador.

---

## Executando o Projeto

### Backend (Terminal 1)

```bash
cd backend
npm start
```

Aguarde a mensagem:
```
🚀 Servidor rodando na porta 3000
📝 Acesse http://localhost:3000
```

### Mobile (Terminal 2)

```bash
cd mobile
npm start
```

### Opções de Execução do Mobile

1. **Expo Go (Recomendado para iniciantes)**
   - Instale o app "Expo Go" no seu celular
   - Escaneie o QR Code exibido no terminal
   - O app será carregado no seu dispositivo

2. **Android Emulator**
   ```bash
   npm run android
   ```
   - Certifique-se de ter um emulador Android rodando

3. **iOS Simulator** (apenas macOS)
   ```bash
   npm run ios
   ```

4. **Web** (experimental)
   ```bash
   npm run web
   ```

---

## Testando a Instalação

### Teste o Backend

1. Abra o navegador em: http://localhost:3000
2. Você deve ver a mensagem de boas-vindas da API

**Teste via terminal:**
```bash
curl http://localhost:3000/api/users
```

### Teste o Mobile

1. Abra o app no dispositivo/emulador
2. Você deve ver a tela de gerenciamento de usuários
3. Tente cadastrar um novo usuário
4. Verifique se a lista é atualizada

---

## Solução de Problemas

### Backend não inicia

**Erro: "Port 3000 is already in use"**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Mobile não conecta ao backend

1. **Verifique se o backend está rodando**
   ```bash
   curl http://localhost:3000
   ```

2. **Atualize a URL da API no App.js**
   - Use o IP correto da sua máquina
   - No Android Emulator: `10.0.2.2`
   - Em dispositivo físico: IP da rede local

3. **Desabilite firewall/antivírus** temporariamente

4. **Certifique-se de estar na mesma rede Wi-Fi**
   (para dispositivos físicos)

### Erro de dependências

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Expo não abre

```bash
# Reinstalar Expo CLI
npm uninstall -g expo-cli
npm install -g expo-cli
```

---

## Ferramentas Úteis

### Desenvolvimento Backend

- **Postman** - Testar API REST
- **Insomnia** - Alternativa ao Postman
- **Thunder Client** - Extensão do VS Code

### Desenvolvimento Mobile

- **React DevTools** - Debug de componentes React
- **Reactotron** - Debug avançado para React Native
- **Flipper** - Debug nativo

---

## Próximos Passos

Após a instalação bem-sucedida:

1. Leia a [Documentação da API](API.md)
2. Explore o código do backend em `backend/server.js`
3. Explore o código do mobile em `mobile/App.js`
4. Tente adicionar novas funcionalidades
5. Personalize o design do app

---

## Recursos Adicionais

- [Documentação do Express](https://expressjs.com/)
- [Documentação do React Native](https://reactnative.dev/)
- [Documentação do Expo](https://docs.expo.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Suporte

Se encontrar problemas:

1. Verifique os logs de erro
2. Consulte a documentação oficial
3. Abra uma issue no GitHub
4. Entre em contato com o autor

---

**Desenvolvido por Paulo Ramos**
