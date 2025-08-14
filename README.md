# Financial Transactions API

A RESTful API for managing financial transactions built with Node.js, Fastify, and TypeScript. This project was developed as part of Rocketseat's Node.js course.

## 🚀 Features

- **Transaction Management**: Create, list, and retrieve financial transactions
- **Session-based Authentication**: Cookie-based session management for user isolation
- **Transaction Summary**: Calculate total balance from all transactions
- **Database Support**: Supports both SQLite (development) and PostgreSQL (production)
- **Type Safety**: Full TypeScript implementation with Zod validation
- **Testing**: Comprehensive test suite with Vitest and Supertest
- **Database Migrations**: Knex.js migrations for database schema management

## 🛠️ Tech Stack

- **Runtime**: Node.js (>=20)
- **Framework**: Fastify
- **Language**: TypeScript
- **Database**: SQLite (dev) / PostgreSQL (prod)
- **ORM**: Knex.js
- **Validation**: Zod
- **Testing**: Vitest + Supertest
- **Build Tool**: TSup
- **Development**: TSX

## 📋 Prerequisites

- Node.js >= 20
- npm or yarn
- PostgreSQL (for production)

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ignite-project01
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Configure the following environment variables:
```env
NODE_ENV=development
DATABASE_CLIENT=sqlite
DATABASE_URL=./db/app.db
PORT=3333
```

4. Run database migrations:
```bash
npm run knex migrate:latest
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```

The server will start on `http://localhost:3333` with hot reload enabled.

### Production Build
```bash
npm run build
npm start
```

## 📊 API Endpoints

### Transactions

#### Create Transaction
```http
POST /transactions
Content-Type: application/json

{
  "title": "Salary",
  "amount": 5000,
  "type": "credit"
}
```

**Response**: `201 Created`

#### List All Transactions
```http
GET /transactions
```

**Response**:
```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salary",
      "amount": 5000,
      "session_id": "session-uuid",
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

#### Get Transaction by ID
```http
GET /transactions/:id
```

**Response**:
```json
{
  "transaction": {
    "id": "uuid",
    "title": "Salary",
    "amount": 5000,
    "session_id": "session-uuid",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

#### Get Transaction Summary
```http
GET /transactions/summary
```

**Response**:
```json
{
  "summary": {
    "amount": 3000
  }
}
```

## 🔐 Authentication

The API uses cookie-based session authentication:

- When creating the first transaction, a `sessionId` cookie is automatically set
- All subsequent requests require this cookie for authentication
- Sessions are isolated - users can only access their own transactions
- Session cookies expire after 7 days

## 🗄️ Database Schema

### Transactions Table
```sql
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  session_id UUID NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

The tests cover:
- Transaction creation
- Transaction listing
- Individual transaction retrieval
- Transaction summary calculation
- Session management

## 📁 Project Structure

```
ignite-project01/
├── db/
│   └── migrations/          # Database migrations
├── src/
│   ├── @types/             # TypeScript type definitions
│   ├── env/                # Environment configuration
│   ├── middleware/         # Custom middleware
│   ├── routes/             # API routes
│   ├── app.ts              # Fastify app configuration
│   ├── database.ts         # Database connection
│   └── server.ts           # Server entry point
├── test/                   # Test files
├── knexfile.ts             # Knex configuration
└── package.json
```

## 🔄 Database Migrations

### Create a new migration:
```bash
npm run knex migrate:make migration_name
```

### Run migrations:
```bash
npm run knex migrate:latest
```

### Rollback migrations:
```bash
npm run knex migrate:rollback
```

## 🛠️ Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run knex` - Run Knex CLI commands
- `npm test` - Run test suite

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `DATABASE_CLIENT` | Database client (`sqlite` or `pg`) | - |
| `DATABASE_URL` | Database connection string | - |
| `PORT` | Server port | `3333` |

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [Rocketseat](https://rocketseat.com.br/) - For the excellent Node.js course
- [Fastify](https://fastify.io/) - Fast and low overhead web framework
- [Knex.js](https://knexjs.org/) - SQL query builder
- [Zod](https://zod.dev/) - TypeScript-first schema validation
