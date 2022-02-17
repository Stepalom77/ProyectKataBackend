const knex = require('../config');

//Insert
const create = (bodyProducts) => {
    return knex
        .insert(bodyProducts)
        .into('products') 
        .returning(['products_id','name','description','price','sku','active', 'created_at'])
}

 //Search all
const findAll = () => {
    return knex
        .select(['products_id','name','description','price','sku','active', 'created_at'])
        .from('products')
}

//Search one
const findOne = (productsId) => {
    return knex
        .select(['products_id','name','description','price','sku','active', 'created_at'])
        .from('products')
        .where({ products_id: productsId });
}
//Update
const update = (productsId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate)
        .from('products')
        .where({ products_id: productsId })
        .returning(['products_id','name','description','price','sku','active', 'created_at'])
}

//Modify
const modify = (productsId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('products')
        .where({ products_id: productsId })
        .returning(['products_id','name','description','price','sku','active', 'created_at'])
}

// Delete
const destroy = (productsId) => {
    return knex
        .del() 
        .from('products') 
        .where({ products_id: productsId })
}

// Soft delete
const softDelete = (productsId) => {
    return knex
        .update({ active: false })
        .from('products')
        .where({ products_id: productsId })
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