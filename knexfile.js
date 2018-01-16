module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'postgres://localhost/diary_analyzer',
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    migrations: {
      directory: './migrations'
    },
    seeds: './seeds'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
