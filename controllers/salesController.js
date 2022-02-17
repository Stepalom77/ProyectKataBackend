const ModelSales = require('../models/Sales');

const createSales = (req, res) => {
   
    ModelSales.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllSales = (req, res) => {
    ModelSales.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneSale = (req, res) => {
    ModelSales.findOne(req.params.idSales)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneSale = (req, res) => {
    ModelSales.update(req.params.idSales, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const modifyOneSale = (req, res) => {
    ModelSales.modify(req.params.idSales, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneSale = (req, res) => {
    ModelSales.destroy(req.params.idSales)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const softDeleteOneSale = (req, res) => {
    ModelSales.softDelete(req.params.idSales)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createSales,
    findAllSales,
    findOneSale,
    updateOneSale,
    modifyOneSale,
    destroyOneSale,
    softDeleteOneSale
}