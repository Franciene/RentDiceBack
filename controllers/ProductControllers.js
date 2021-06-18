const Product = require('../models/products');
const ProductRent = require('../models/productsRent');
const mongoose = require("mongoose");

class ProductsController {
    static async insertProduct(req, res) {
        let body = req.body;

		let product = new Product();

        product.nome = body.nome;
        product.priceRent = body.priceRent;
        product.priceBuy = body.priceBuy;
        product.priceNew = body.priceNew;
        product.age = body.age;
        product.imageName = body.imageName;
        product.imageFile = body.imageFile;
        product.timePlay = body.timePlay;
        product.amountPlayers = body.amountPlayers;
        product.history = body.history;
        product.desc = body.desc;
        product.components = body.components;
        product.type = body.type;
        product.color = body.color;

        await product.save();

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: [product]
		});
    }


    static async getProducts(req, res) {
        let products = new Product();

        products = await Product.find();

        console.log(products);

        if(products.length == 0 ){
            return res.status(404).json({
                success: false,
                message: 'Empty list products',
                payload: []
            });
        }

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: products
		});
    } 
    
    static async getProductById(req, res) {
        let product = new Product();

        product = await Product.findOne({
            _id : req.params.id
        });

        console.log(product);

        if(product == null ){
            return res.status(404).json({
                success: false,
                message: 'Product not found',
                payload: []
            });
        }

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: product
		});
    }

    
    static async getProductsUserRent(req, res) {
        let user = req.params;
        let products = new ProductRent();

        products = await ProductRent.find({
            user_id : user
        });

        let productsList = await Product.find({
            _id : {$in : products}
        });

        if(productsList.length == 0 ){
            return res.status(404).json({
                success: false,
                message: 'Empty list products',
                payload: []
            });
        }

        return res.status(200).json({
			success: true,
			message: 'Success',
			payload: productsList
		});
    }
}

module.exports = ProductsController;