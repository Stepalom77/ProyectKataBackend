
const ModelCustomers = require('../models/Customers');

const createCustomers = (req, res) => {

    ModelCustomers.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllCustomers = (req, res) => {
    ModelCustomers.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneCustomer = (req, res) => {
    ModelCustomers.findOne(req.params.idCustomers)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneCustomer = (req, res) => {
    ModelCustomers.update(req.params.idCustomers, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const modifyOneCustomer = (req, res) => {
    ModelCustomers.modify(req.params.idCustomers, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneCustomer = (req, res) => {
    ModelCustomers.destroy(req.params.idCustomers)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const softDeleteOneCustomer = (req, res) => {
    ModelCustomers.softDelete(req.params.idCustomers)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createCustomers,
    findAllCustomers,
    findOneCustomer,
    updateOneCustomer,
    modifyOneCustomer,
    destroyOneCustomer,
    softDeleteOneCustomer
}