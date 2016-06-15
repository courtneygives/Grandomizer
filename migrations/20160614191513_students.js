exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('students', function(table) {
      table.increments();
      table.string('name');
      table.integer('cohort_id').unsigned().references('cohorts.id');
      table.boolean('leader').default(false);
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('students')
  ]);
};
