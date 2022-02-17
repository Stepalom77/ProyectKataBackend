/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("sales").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("sales", function (table) {
                table.increments("sales_id").primary();
                table.integer("stores_id").notNullable().references("stores_id").inTable("stores");
                table.integer("product_amount").notNullable();
                table.string("payment_amount").notNullable();
                table.integer("products_id").notNullable().references("products_id").inTable("products");
                table.integer("customers_id").notNullable().references("customers_id").inTable("customers");
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
