
const ModelProducts = require('../models/Products');

const createProducts = (req, res) => {
   
    ModelProducts.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllProducts = (req, res) => {
    ModelProducts.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneProduct = (req, res) => {
    ModelProducts.findOne(req.params.idProducts)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneProduct = (req, res) => {
    ModelProducts.update(req.params.idProducts, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const modifyOneProduct = (req, res) => {
    ModelProducts.modify(req.params.idProducts, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneProduct = (req, res) => {
    ModelProducts.destroy(req.params.idProducts)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const softDeleteOneProduct = (req, res) => {
    ModelProducts.softDelete(req.params.idProducts)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createProducts,
    findAllProducts,
    findOneProduct,
    updateOneProduct,
    modifyOneProduct,
    destroyOneProduct,
    softDeleteOneProduct
}