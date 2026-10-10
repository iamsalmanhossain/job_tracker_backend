# 🚀 Job Tracker API (Backend)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white)

A robust, scalable, and highly performant RESTful API for a Job Tracking application. This backend is designed to help professionals manage their job applications, track interviews, store resumes, and receive notifications about their application status. 

It is built with best practices including **SOLID principles**, robust authentication, role-based access control, Redis caching, and extensive security middlewares.

## ✨ Core Features & Capabilities

This API is engineered to deliver a production-ready, scalable, and highly secure foundation for job tracking applications. It emphasizes clean code principles, performance optimization, and developer experience.

### 🔐 Authentication & Identity Management
- **Multi-Strategy Auth:** Seamless login via traditional Email/Password and **Google OAuth 2.0**.
- **Stateless & Secure JWT:** Implements dual-token architecture (Short-lived Access Tokens & Long-lived Refresh Tokens).
- **Role-Based Access Control (RBAC):** Granular permission management separating `Admin` privileges from standard `User` actions.
- **Audit Logging:** Comprehensive tracking of security events, login attempts, and critical data mutations.

### 💼 Job Application Lifecycle
- **End-to-End Tracking:** Create, update, and monitor job applications through various stages (Applied, Interviewing, Offered, Rejected).
- **Domain-Driven Design (DDD):** Business logic is strictly encapsulated within modular boundaries, ensuring high maintainability and loose coupling.
- **Interview & Follow-up Scheduling:** Built-in capabilities to schedule interviews, log interview notes, and set follow-up reminders.

### ☁️ Cloud Storage & Media Management
- **Cloudinary Integration:** Direct integration for storing and streaming user avatars and PDF resumes.
- **Serverless-Compatible Uploads:** Optimized `multer` middleware that utilizes temporary directories (`/tmp`) to perfectly comply with serverless read-only filesystems.

### ⚡ Performance & Caching
- **Redis Integration:** Offloads database traffic by caching frequently accessed data (like user profiles and configuration metadata) using high-performance Redis stores.
- **Optimized Database Queries:** Uses **Prisma ORM** for type-safe, optimized SQL execution and connection pooling.

### 🛡️ Enterprise-Grade Security
- **Data Validation:** Strict runtime type-checking and payload validation using **Zod** to prevent NoSQL injection and malformed requests.
- **API Hardening:** 
  - `helmet` for setting secure HTTP headers.
  - `express-rate-limit` backed by Redis to prevent brute-force and DDoS attacks.
  - `hpp` to protect against HTTP Parameter Pollution.
- **Global Error Handling:** Centralized error catching mechanism that normalizes errors before sending them to the client, preventing stack-trace leaks.

### 🚀 Scalability & Deployment
- **Serverless Architecture:** Configured out-of-the-box for **Vercel Serverless Functions** (`vercel.json` included), offering instant scaling, zero maintenance, and pay-as-you-go pricing.
- **Automated Notifications:** Event-driven email dispatching using **Nodemailer** for user onboarding, password resets, and application status updates.

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js (Written in TypeScript)
- **Database:** PostgreSQL
- **ORM:** Prisma ORM
- **Cache / In-Memory DB:** Redis
- **File Storage:** Cloudinary & Multer
- **Validation:** Zod
- **Authentication:** jsonwebtoken, bcryptjs, google-auth-library
- **Mailing:** Nodemailer

## 📦 Prerequisites

Before running this project locally, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [pnpm](https://pnpm.io/) (Package manager)
- [PostgreSQL](https://www.postgresql.org/) (Local or Cloud instance)
- [Redis](https://redis.io/) (Local or Cloud instance)
- [Cloudinary Account](https://cloudinary.com/) (For file uploads)

## 🚀 Local Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/job_tracker_backend.git
cd job_tracker_backend
```

2. **Install Dependencies**
```bash
pnpm install
```

3. **Environment Variables Setup**
Create a `.env` file in the root directory and copy the contents from `.env.example`. Fill in the required credentials:
```env
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/job_tracker"
REDIS_URL="redis://localhost:6379"

JWT_SECRET="your_jwt_secret"
JWT_EXPIRES_IN="1h"
JWT_REFRESH_SECRET="your_refresh_secret"
JWT_REFRESH_EXPIRES_IN="7d"

CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_app_password"

GOOGLE_CLIENT_ID="your_google_client_id"
```

4. **Database Migration**
Sync your Prisma schema with your PostgreSQL database:
```bash
pnpm db:push
# or
pnpm prisma generate
```

5. **Start the Development Server**
```bash
pnpm dev
```
The server should now be running on `http://localhost:5000`

## 📂 Project Structure

```text
job_tracker_backend/
├── api/                # Vercel Serverless Function entrypoint
├── prisma/             # Database schema and migrations
├── src/                # Main application source code
│   ├── config/         # Environment variables & DB/Prisma initialization
│   ├── cronJob/        # Scheduled background tasks
│   ├── lib/            # Custom libraries and 3rd party wrappers
│   ├── middleware/     # Global middlewares (Auth, Upload, Rate Limiter)
│   ├── modules/        # Feature-based business logic (Domain Driven Design)
│   │   ├── admin/      
│   │   ├── audit-log/  
│   │   ├── auth/       
│   │   ├── follow-up/  
│   │   ├── interview/  
│   │   ├── job-application/
│   │   ├── note/       
│   │   ├── notification/
│   │   ├── resume/     
│   │   ├── upload/     
│   │   └── user-dashboard/
│   ├── routes/         # Central API route compiler
│   ├── services/       # External service integrations
│   ├── shared/         # Shared utilities (AppError, Redis service, SendResponse)
│   ├── socket/         # Real-time WebSocket event handlers
│   ├── types/          # Global TypeScript interfaces/types
│   ├── utils/          # Helper functions (Cloudinary, JWT)
│   ├── workers/        # Background queue workers
│   ├── app.ts          # Express application configuration
│   └── server.ts       # Local server entry point
├── vercel.json         # Vercel deployment configuration
└── package.json        # Project metadata and scripts
```

## ☁️ Deployment (Vercel)

This project is fully optimized for **Vercel Serverless Functions**. 
It includes a `vercel.json` and a serverless entry point at `api/index.ts`.

To deploy on Vercel:
1. Connect your GitHub repository to Vercel.
2. In the Vercel Dashboard, ensure you set the **Framework Preset** to `Other`.
3. Add all your `.env` variables in **Project Settings -> Environment Variables**. *(Note: Do not use localhost URLs for PostgreSQL and Redis on Vercel; use cloud providers like Supabase, Neon, or Upstash)*.
4. Deploy!

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is [ISC](https://opensource.org/licenses/ISC) licensed.
