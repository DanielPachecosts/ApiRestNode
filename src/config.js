require('dotenv').config()

const config = {
    port: process.env.PORT || 3000,
    dbConnection: process.env.DB_CONNECTION,
    dbHost: process.env.DB_HOST,
    dbPort: process.env.DB_PORT,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
}

module.exports = config;