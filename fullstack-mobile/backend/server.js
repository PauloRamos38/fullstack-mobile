const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados simulado
let users = [
  { id: 1, name: 'João Silva', email: 'joao@email.com', role: 'Developer' },
  { id: 2, name: 'Maria Santos', email: 'maria@email.com', role: 'Designer' },
  { id: 3, name: 'Pedro Costa', email: 'pedro@email.com', role: 'Manager' }
];

let nextId = 4;

// Rota raiz
app.get('/', (req, res) => {
  res.json({
    message: 'Fullstack Mobile API',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      user: '/api/users/:id'
    }
  });
});

// GET - Listar todos os usuários
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// GET - Buscar usuário por ID
app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// POST - Criar novo usuário
app.post('/api/users', (req, res) => {
  const { name, email, role } = req.body;
  
  // Validação
  if (!name || !email || !role) {
    return res.status(400).json({
      success: false,
      message: 'Nome, email e cargo são obrigatórios'
    });
  }
  
  // Verificar se email já existe
  const emailExists = users.find(u => u.email === email);
  if (emailExists) {
    return res.status(400).json({
      success: false,
      message: 'Email já cadastrado'
    });
  }
  
  const newUser = {
    id: nextId++,
    name,
    email,
    role
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    message: 'Usuário criado com sucesso',
    data: newUser
  });
});

// PUT - Atualizar usuário
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, role } = req.body;
  
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }
  
  // Verificar se o novo email já existe em outro usuário
  if (email) {
    const emailExists = users.find(u => u.email === email && u.id !== id);
    if (emailExists) {
      return res.status(400).json({
        success: false,
        message: 'Email já cadastrado'
      });
    }
  }
  
  // Atualizar apenas os campos fornecidos
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  if (role) users[userIndex].role = role;
  
  res.json({
    success: true,
    message: 'Usuário atualizado com sucesso',
    data: users[userIndex]
  });
});

// DELETE - Remover usuário
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }
  
  const deletedUser = users.splice(userIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Usuário removido com sucesso',
    data: deletedUser
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📝 Acesse http://localhost:${PORT}`);
});
