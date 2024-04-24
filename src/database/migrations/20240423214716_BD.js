/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Clientes', function(table){
        table.increments('id').primary()
        table.string('Nome',100).notNullable()
        table.string('Email',100).notNullable()
        table.integer('Telefone').notNullable()
        table.string('Endereço').notNullable()
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
