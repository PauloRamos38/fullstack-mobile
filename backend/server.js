const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Data de exemplo (simula um banco de dados)
let users = [
  { id: 1, name: 'Paulo Ramos', email: 'paulo@example.com', role: 'Desenvolvedor Fullstack' },
  { id: 2, name: 'Maria Silva', email: 'maria@example.com', role: 'Designer' },
  { id: 3, name: 'João Santos', email: 'joao@example.com', role: 'Desenvolvedor Mobile' }
];

// Rotas
app.get('/', (req, res) => {
  res.json({ 
    message: 'Bem-vindo à API Fullstack Mobile Training!',
    version: '1.0.0',
    endpoints: {
      users: '/api/users',
      userById: '/api/users/:id'
    }
  });
});

// GET - Listar todos os usuários
app.get('/api/users', (req, res) => {
  res.json({
    success: true,
    data: users
  });
});

// GET - Buscar usuário por ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
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
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: 'Nome e email são obrigatórios'
    });
  }
  
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    role: role || 'Usuário'
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
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }
  
  const { name, email, role } = req.body;
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    role: role || users[userIndex].role
  };
  
  res.json({
    success: true,
    message: 'Usuário atualizado com sucesso',
    data: users[userIndex]
  });
});

// DELETE - Remover usuário
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Usuário não encontrado'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'Usuário removido com sucesso'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📝 Acesse http://localhost:${PORT}`);
});
