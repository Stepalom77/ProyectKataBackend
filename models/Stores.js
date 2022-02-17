const knex = require('../config');

//Insert
const create = (bodyStores) => {
    return knex
        .insert(bodyStores)
        .into('stores') 
        .returning(['stores_id','address','city', 'active', 'created_at'])
}

//Search all
const findAll = () => {
    return knex
        .select(['stores_id','address','city', 'active', 'created_at'])
        .from('stores')
}

//Search one
const findOne = (storesId) => {
    return knex
        .select(['stores_id','address','city', 'active', 'created_at'])
        .from('stores')
        .where({ stores_id: storesId });
}
//Update
const update = (storesId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) //La información a actualizar
        .from('stores')
        .where({ stores_id: storesId })
        .returning(['stores_id','address','city', 'active', 'created_at'])
}

//Modify
const modify = (storesId, bodyToModify) => {
    return knex
        .update(bodyToModify) 
        .from('stores')
        .where({ stores_id: storesId })
        .returning(['stores_id','address','city', 'active', 'created_at'])
}
// Delete
const destroy = (storesId) => {
    return knex
        .del() //delete
        .from('stores') // borrar de la tabla
        .where({ stores_id: storesId })
}

// Soft delete
const softDelete = (storesId) => {
    return knex
        .update({ active: false })
        .from('stores')
        .where({ stores_id: storesId })
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