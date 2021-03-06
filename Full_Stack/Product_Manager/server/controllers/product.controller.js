const {Product} = require("../models/product.model");

module.exports = {
    index: (req, res) => {
        res.json({msg: "Welcome to Products API!"})
    },

    createProduct: (req, res) => {
        const {title, price, desc} = req.body;
        Product.create({
            title,
            price,
            desc
        })
        .then( product => res.json(product))
        .catch(err => res.json(err));
    },

    AllProducts: (req, res) => {
        Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({message: "somtething went wrong! " + err}));
    },

    getProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json({message: "somtething went wrong! " + err}));
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id},
        req.body, {new: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(res.json(err)));
    },
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
        .then(deletedCon => res.json(deletedCon))
        .catch(err => res.json(res.json(err)));
    }

}