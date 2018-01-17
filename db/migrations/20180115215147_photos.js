exports.up = function (knex) {
  return knex.schema.createTable('photos', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('description')
    table.string('url').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('photos')
}
