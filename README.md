# Backend Promotora 🚀

Backend de autenticação e gerenciamento de usuários construído com **Fastify** e **TypeScript**.

## 📋 Descrição

API REST para autenticação de usuários com suporte a:
- Login com email e senha
- Recuperação de senha
- Middleware de autenticação JWT
- Integração com Supabase para banco de dados
- CORS configurado para aceitar requisições do frontend

## 🗂️ Estrutura do Projeto

```
src/
├── server.ts                 # Arquivo principal - configuração do servidor Fastify
├── config/
│   └── supabase/
│       └── client.ts         # Cliente Supabase para acesso ao banco de dados
├── controllers/
│   └── auth.controller.ts    # Controladores de autenticação (login, recuperar senha)
├── middlewares/
│   └── auth.middleware.ts    # Middleware para validar tokens JWT
├── routes/
│   └── auth.route.ts         # Definição das rotas de autenticação
├── services/
│   └── auth.service.ts       # Lógica de negócio (autenticação, validação)
├── @types/
│   └── fastify.d.ts          # Tipos customizados do Fastify
└── tests/
    ├── setup.ts              # Configuração de testes
    ├── controllers/
    ├── middlewares/
    ├── routes/
    └── services/
```

## 🔧 Instalação

### Pré-requisitos
- Node.js 16+
- npm ou yarn

### Passos

1. **Clonar o repositório**
```bash
git clone <url-do-repositorio>
cd backend-promotora
```

2. **Instalar dependências**
```bash
npm install
```

3. **Configurar variáveis de ambiente**
Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:
```env
SUPABASE_URL=sua_url_supabase
SUPABASE_KEY=sua_chave_supabase
JWT_SECRET=sua_chave_jwt_secreta
PORT=3000
```

4. **Executar em desenvolvimento**
```bash
npm run dev
```

## 📚 Componentes Principais

### **Server (server.ts)**
Configuração principal do servidor Fastify com:
- Logger usando Pino
- CORS habilitado
- Registro de rotas de autenticação

### **Controllers (auth.controller.ts)**
Controladores que recebem as requisições HTTP e delegam a lógica aos serviços:
- `loginController` - Autentica o usuário
- `forgotPasswordController` - Inicia processo de recuperação de senha

### **Services (auth.service.ts)**
Camada de negócio com a lógica de autenticação:
- `loginService` - Valida credenciais e gera JWT
- `forgotPasswordService` - Processa recuperação de senha

### **Middlewares (auth.middleware.ts)**
Proteção de rotas:
- `authMiddleware` - Valida token JWT nas requisições

### **Routes (auth.route.ts)**
Definição das rotas disponíveis:
- `POST /login` - Fazer login
- `POST /forgot-password` - Recuperar senha
- `GET /profile` - Rota protegida (requer autenticação)

## 🚀 Scripts Disponíveis

```bash
# Executar em modo desenvolvimento
npm run dev

# Compilar TypeScript para JavaScript
npm run build

# Executar testes
npm run test

# Executar testes em modo watch
npm run test:watch

# Executar em produção
npm start
```

## 📦 Dependências Principais

### Produção
| Pacote | Versão | Descrição |
|--------|--------|-----------|
| **fastify** | ^8.x | Framework web rápido e eficiente |
| **@fastify/cors** | ^11.2.0 | Middleware CORS para Fastify |
| **@supabase/supabase-js** | ^2.106.1 | Cliente Supabase para banco de dados |
| **bcryptjs** | ^3.0.3 | Criptografia de senhas |
| **jsonwebtoken** | ^9.0.3 | Criação e validação de JWT |
| **dotenv** | ^17.4.2 | Carregamento de variáveis de ambiente |
| **cors** | ^2.8.6 | Middleware CORS |
| **pino** | ^10.3.1 | Logger de alta performance |
| **pino-pretty** | ^13.1.3 | Formatter para logs Pino |

### Desenvolvimento
| Pacote | Versão | Descrição |
|--------|--------|-----------|
| **typescript** | - | Linguagem tipada para JavaScript |
| **ts-node-dev** | - | Execução e reload automático de código TS |
| **jest** | ^30.4.2 | Framework de testes |
| **ts-jest** | ^29.4.11 | Suporte Jest para TypeScript |
| **supertest** | ^7.2.2 | Testes HTTP |
| **@types/** | - | Definições de tipos TypeScript |

## 🧪 Testes

O projeto inclui testes para:
- Controllers de autenticação
- Middlewares
- Rotas
- Services

Execute os testes com:
```bash
npm run test
```

## 🔐 Autenticação

A autenticação é feita via **JWT (JSON Web Tokens)**:

1. Usuário envia credenciais em `POST /login`
2. Backend valida e retorna token JWT
3. Cliente envia token no header `Authorization: Bearer <token>`
4. Middleware `authMiddleware` valida o token

## 📝 Notas

- As senhas são criptografadas com **bcryptjs**
- CORS está configurado para aceitar requisições de qualquer origem
- O servidor roda na porta **3000** por padrão
- Logs são formatados com **Pino** para melhor legibilidade

## 🤝 Contribuindo

Para contribuir com o projeto:
1. Faça um fork
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

---

**Desenvolvido em TypeScript e rageScript**
