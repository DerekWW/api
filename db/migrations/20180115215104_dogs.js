
exports.up = function (knex, Promise) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('breed').notNullable()
    table.integer('age').notNullable()
    table.integer('weight').notNullable()
    table.string('temperament').notNullable()
    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('dogs')
}
