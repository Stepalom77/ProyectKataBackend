/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("customers").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("customers", function (table) {
                table.increments("customers_id").primary();
                table.string("first_name").notNullable();
                table.string("last_name").notNullable();
                table.integer("phone").notNullable();
                table.string("email").notNullable().unique();
                table.text("address").notNullable().unique();
                table.integer("zip_code").notNullable();
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
