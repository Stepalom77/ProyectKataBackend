/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("products").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("products", function (table) {
                table.increments("products_id").primary();
                table.string("name").notNullable();;
                table.text("description").notNullable();
                table.decimal("price").notNullable();
                table.integer("sku").notNullable().unique();
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
