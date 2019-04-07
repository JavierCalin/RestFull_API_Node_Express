const express = require('express')
const app = express();

const productsRoutes = require('./api/rutes/products')
const ordersRoutes = require('./api/rutes/orders')

app.use('/products', productsRoutes)
app.use('/orders', ordersRoutes)

module.exports = app;