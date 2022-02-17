/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
    return knex.schema.hasTable("stores").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("stores", function (table) {
                table.increments("stores_id").primary();
                table.text("address").notNullable();
                table.string("city").notNullable();
                table.boolean("active").notNullable().defaultTo(true);
                table.timestamp("created_at").defaultTo(knex.fn.now());
            })
        }
    }
    )
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
