# Guia Rápido - Fullstack Mobile 🚀

Comece a usar o projeto Fullstack Mobile em menos de 5 minutos!

## ⚡ Instalação Express

### 1. Clone e Navegue
```bash
git clone https://github.com/PauloRamos38/fullstack-mobile.git
cd fullstack-mobile
```

### 2. Backend - Instale e Execute
```bash
cd backend
npm install
npm start
```

✅ Backend rodando em `http://localhost:3000`

### 3. Mobile - Instale e Execute (em outro terminal)
```bash
cd mobile
npm install
npm start
```

### 4. Escolha como executar:
- 📱 **Expo Go**: Escaneie o QR Code com o app Expo Go
- 🤖 **Android**: `npm run android`
- 🍎 **iOS**: `npm run ios` (apenas macOS)

---

## 🎯 Teste Rápido

### Testar Backend via Browser
Abra: http://localhost:3000

### Testar Backend via Terminal
```bash
curl http://localhost:3000/api/users
```

### Testar Mobile
1. Abra o app no dispositivo/emulador
2. Cadastre um usuário de teste
3. Verifique se aparece na lista

---

## 📝 Configuração do IP para Mobile

**IMPORTANTE**: Atualize a URL da API no arquivo `mobile/App.js`:

```javascript
// Linha 18
const API_URL = 'http://SEU_IP:3000/api/users';
```

### Como descobrir seu IP:

**Windows:**
```bash
ipconfig
```
Procure por "Endereço IPv4"

**macOS/Linux:**
```bash
ifconfig | grep inet
```

**Exemplo:**
```javascript
const API_URL = 'http://192.168.1.100:3000/api/users';
```

**Android Emulator:**
```javascript
const API_URL = 'http://10.0.2.2:3000/api/users';
```

---

## 📚 Próximos Passos

1. ✅ Teste todos os endpoints da API
2. ✅ Explore o código do backend (`backend/server.js`)
3. ✅ Explore o código do mobile (`mobile/App.js`)
4. ✅ Leia a [Documentação da API](docs/API.md)
5. ✅ Leia o [Guia Completo de Setup](docs/SETUP.md)

---

## 🐛 Problemas Comuns

### Backend: "Port 3000 is already in use"
```bash
# Mude a porta no backend/server.js
const PORT = process.env.PORT || 3001;
```

### Mobile: Não conecta ao backend
1. Verifique se o backend está rodando
2. Confirme se o IP está correto
3. Desative firewall/antivírus temporariamente
4. Certifique-se de estar na mesma rede Wi-Fi

### Expo: Erro ao iniciar
```bash
npm uninstall -g expo-cli
npm install -g expo-cli
```

---

## 🎨 Personalize o Projeto

### Adicione um novo campo ao usuário:
1. Backend: Adicione o campo no array de usuários
2. Backend: Atualize a validação no POST/PUT
3. Mobile: Adicione um novo `TextInput`
4. Mobile: Atualize o objeto enviado no `addUser`

### Mude as cores do app:
Edite os estilos em `mobile/App.js` na seção `StyleSheet.create`

---

## 📖 Documentação Completa

- [README.md](README.md) - Visão geral do projeto
- [docs/API.md](docs/API.md) - Referência completa da API
- [docs/SETUP.md](docs/SETUP.md) - Guia detalhado de instalação

---

## 💡 Dicas

- Use **Postman** ou **Insomnia** para testar a API
- Install **React Native Debugger** para debug avançado
- Use **Reactotron** para monitorar requisições
- Explore o **Expo DevTools** no navegador

---

## 🆘 Precisa de Ajuda?

- Consulte o [README.md](README.md) principal
- Leia o [Guia de Setup Completo](docs/SETUP.md)
- Abra uma issue no GitHub
- Entre em contato: pauloramos38.dev@gmail.com

---

**Divirta-se codando! 🎉**

Desenvolvido com ❤️ por Paulo Ramos
