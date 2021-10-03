// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphql',
    user:     'rcena',
    password: '12341234'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
