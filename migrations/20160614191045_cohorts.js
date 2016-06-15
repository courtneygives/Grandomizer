exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cohorts', function(table) {
      table.increments();
      table.string('name');
      table.integer('user_id').unsigned().references('users.id');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cohorts')
  ]);
};
