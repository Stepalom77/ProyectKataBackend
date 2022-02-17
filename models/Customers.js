
const knex = require('../config');

//Insert
const create = (bodyCustomers) => {
    return knex
        .insert(bodyCustomers)
        .into('customers') 
        .returning(['customers_id','first_name','last_name','phone','address','email', 'zip_code', 'city', 'active', 'created_at'])
}

//Search all
const findAll = () => {
    return knex
        .select(['customers_id','first_name','last_name','phone','address','email', 'zip_code', 'city', 'active', 'created_at'])
        .from('customers')
}

//Search one
const findOne = (customersId) => {
    return knex
        .select(['customers_id','first_name','last_name','phone','address','email', 'zip_code', 'city', 'active', 'created_at'])
        .from('customers')
        .where({ customers_id: customersId });
}
//Update
const update = (customersId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) 
        .from('customers')
        .where({ customers_id: customersId })
        .returning(['customers_id','first_name','last_name','phone','address','email', 'zip_code', 'city', 'active', 'created_at'])
}

//Modify
const modify = (customersId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('customers')
        .where({ customers_id: customersId })
        .returning(['customers_id','first_name','last_name','phone','address','email', 'zip_code', 'city', 'active', 'created_at'])
}

// Delete
const destroy = (customersId) => {
    return knex
        .del()
        .from('customers')
        .where({ customers_id: customersId })
}

// Soft delete
const softDelete = (customersId) => {
    return knex
        .update({ active: false })
        .from('customers')
        .where({ customers_id: customersId })
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