require('dotenv').config();

const express = require('express');
//Importar las rutas de mi vista
const customersRoutes = require('./routes/customersRoutes');
const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');
const storesRoutes = require('./routes/storesRoutes');

const app = express();

//Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rutas
    app.use('/api/v1', customersRoutes);
    app.use('/api/v1', productsRoutes);
    app.use('/api/v1', salesRoutes);
    app.use('/api/v1', storesRoutes);

// Poner el servidor a escuchar
app.listen(4000,()=> {
    console.log('Server ON: 4000');
})