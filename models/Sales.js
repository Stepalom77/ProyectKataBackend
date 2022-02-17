const knex = require('../config');

//Insert
const create = (bodySales) => {
    return knex
        .insert(bodySales)
        .into('sales') 
        .returning(['sales_id','stores_id','product_amount','payment_amount','products_id', 'customers_id', 'city','active', 'created_at'])
}

//Search all
const findAll = () => {
    return knex
        .select(['sales_id','stores_id','product_amount','payment_amount','products_id', 'customers_id', 'city','active', 'created_at'])
        .from('sales')
}

//Search one
const findOne = (salesId) => {
    return knex
        .select(['sales_id','stores_id','product_amount','payment_amount','products_id', 'customers_id', 'city','active', 'created_at'])
        .from('sales')
        .where({ sales_id: salesId });
}
//Update
const update = (salesId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) 
        .from('sales')
        .where({ sales_id: salesId })
        .returning(['sales_id','stores_id','product_amount','payment_amount','products_id', 'customers_id', 'city','active', 'created_at'])
}

//Modify
const modify = (salesId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('sales')
        .where({ sales_id: salesId })
        .returning(['sales_id','stores_id','product_amount','payment_amount','products_id', 'customers_id', 'city','active', 'created_at'])
}

// Delete
const destroy = (salesId) => {
    return knex
        .del() 
        .from('sales') 
        .where({ sales_id: salesId })
}

// Soft delete
const softDelete = (salesId) => {
    return knex
        .update({ active: false })
        .from('sales')
        .where({ sales_id: salesId })
}
//Functions
module.exports = {
    create,
    findAll,
    findOne,
    update,
    modify,
    destroy,
    softDelete
}