
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
