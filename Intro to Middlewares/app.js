const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
    res.send('<html><head><title>Home</title><head><body><form action="/product" method="POST">' +
        '<input type="text" name="productName" placeholder="Product Name">' +
        '<input type="text" name="productSize" placeholder="Product Size">' +
        '<button type="submit">Add Product</button></form></body></html>');
});

app.use('/product', (req, res, next) => {
    console.log('Product Name:', req.body.productName);
    console.log('Product Size:', req.body.productSize);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>This is Express Js</h1>');
});

app.listen(3000);



