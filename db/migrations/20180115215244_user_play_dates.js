exports.up = function (knex) {
  return knex.schema.createTable('user_play_dates', (table) => {
    table.increments()
    table.integer('play_date_id').notNullable().references('id').inTable('play_dates')
    table.integer('user_id').notNullable().references('id').inTable('users')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_play_dates')
}
