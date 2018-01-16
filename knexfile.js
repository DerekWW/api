module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: `postgres://localhost/${process.env.DB_NAME}`,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
