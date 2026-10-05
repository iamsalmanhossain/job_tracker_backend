import dotenv from 'dotenv'
dotenv.config()

export const env = {
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://admin:admin@localhost:5432/mydb',
    PORT: process.env.PORT || '3000',
}

if (!env.DATABASE_URL || !env.PORT) {
    throw new Error('Missing required environment variables')
}