exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      // DECIDE ON SCHEMA, placeholders below
      return knex('users').insert([
        {
          id: 1,
          colName: 'rowValue1'
        },
        {
          id: 2,
          colName: 'rowValue2'
        },
        {
          id: 3,
          colName: 'rowValue3'
        }])
    })
    .then(() => {
      return knex.raw('SELECT setval(\'users_id_seq\', (SELECT MAX(id) FROM users))')
    })
}
