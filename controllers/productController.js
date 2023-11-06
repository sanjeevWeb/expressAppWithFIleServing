const path = require('path');

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
}

exports.postProduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}

exports.contactFunc = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
}

exports.successFunc = (req, res) => {
    res.send('Form successfuly filled');
}

exports.shopFunc = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
}
