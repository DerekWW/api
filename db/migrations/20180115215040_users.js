
exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('email').unique().notNullable()
    table.string('username').unique().notNullable()
    table.integer('zip_code').notNullable()
    table.integer('age')
    table.string('password', 60)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
