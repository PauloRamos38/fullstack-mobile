# Quick Start Guide 🚀

Get started with the Fullstack Mobile Training project in just a few minutes!

## Prerequisites

Make sure you have installed:
- Node.js (v14+)
- npm (v6+)

## Installation (5 minutes)

### 1. Clone the Repository
```bash
git clone https://github.com/PauloRamos38/fullstack-mobile.git
cd fullstack-mobile
```

### 2. Set Up Backend
```bash
cd backend
npm install
npm start
```

✅ Backend running on http://localhost:3000

### 3. Set Up Mobile (in a new terminal)
```bash
cd mobile
npm install
npm start
```

## Testing the API

Open a new terminal and try these commands:

```bash
# Test API is running
curl http://localhost:3000

# List all users
curl http://localhost:3000/api/users

# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Your Name","email":"your@email.com","role":"Developer"}'
```

## What's Included

✅ **Backend API**
- Node.js + Express
- REST endpoints (GET, POST, PUT, DELETE)
- CORS enabled
- User management system

✅ **Mobile App**
- React Native
- User interface
- API integration
- CRUD operations

✅ **Documentation**
- Complete README
- API documentation
- Setup guide

## Next Steps

1. 📚 Read the [full documentation](README.md)
2. 🔗 Check the [API endpoints](docs/API.md)
3. 🛠️ Follow the [detailed setup guide](docs/SETUP.md)
4. 💡 Start customizing the app!

## Need Help?

- Check [docs/SETUP.md](docs/SETUP.md) for troubleshooting
- Review [docs/API.md](docs/API.md) for API details

---

**Happy coding! 🎉**
