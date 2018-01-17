exports.up = function (knex) {
  return knex.schema.createTable('play_dates', (table) => {
    table.increments()
    table.integer('location_id').notNullable().references('id').inTable('locations')
    table.dateTime('dateTime').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('play_dates')
}
