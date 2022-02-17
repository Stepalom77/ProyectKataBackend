const ModelStores = require('../models/Stores');

const createStores = (req, res) => {
   
    ModelStores.create(req.body)
        .then((row)=>{
            res.status(201).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findAllStores = (req, res) => {
    ModelStores.findAll()
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const findOneStore = (req, res) => {
    ModelStores.findOne(req.params.idStores)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const updateOneStore = (req, res) => {
    ModelStores.update(req.params.idStores, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const modifyOneStore = (req, res) => {
    ModelStores.modify(req.params.idStores, req.body)
        .then((row)=>{
            res.status(200).send(row);
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const destroyOneStore = (req, res) => {
    ModelStores.destroy(req.params.idStores)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

const softDeleteOneStore = (req, res) => {
    ModelStores.softDelete(req.params.idStores)
        .then(()=>{
            res.status(204).send();
        })
        .catch((err)=>{
            res.status(400).send(err.message);
        })
}

module.exports = {
    createStores,
    findAllStores,
    findOneStore,
    updateOneStore,
    modifyOneStore,
    destroyOneStore,
    softDeleteOneStore
}