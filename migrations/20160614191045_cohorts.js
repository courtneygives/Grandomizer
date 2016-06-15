
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cohorts', function(table) {
      table.increments();
      table.string('name');
      table.string('user_id');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cohorts')
  ]);
};
