exports.up = function (knex) {
  return knex.schema.createTable('locations', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.integer('zip_code').notNullable()
    table.boolean('gated').notNullable()
    table.boolean('doggy_bags').notNullable()
    table.string('size').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('locations')
}
