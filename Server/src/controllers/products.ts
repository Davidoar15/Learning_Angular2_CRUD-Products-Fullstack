import { Request, Response } from "express"
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const listProducts = await Product.findAll();

        listProducts 
        ? res.status(200).json(listProducts)
        : res.status(404).send("Products Not Found")
    } catch (error) {
        console.log("GET PRODUCTS", error);
        res.status(500).json({ msg: "Internal Server Error" });
    };
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
    
        product 
        ? res.status(200).json(product)
        : res.status(404).send(`Product ${id} Not Found`)
    } catch (error) {
        console.log("GET PRODUCT", error);
        res.status(500).json({ msg: "Internal Server Error" });
    };
};

export const postProduct = async (req: Request, res: Response) => {
    try {
        const { body } = req;
    
        await Product.create(body);
    
        res.status(200).json({
            msg: "Product Added Correctly",
            product: body
        });
    } catch (error) {
        console.log("POST PRODUCT", error);
        res.status(500).json({ msg: "Internal Server Error" });
    };
};

export const putProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { body } = req;
    
        const product = await Product.findByPk(id);
    
        if(product) {
            await product.update(body);
            await res.status(200).json({
                msg: "Product Updated Correctly",
                product
            })
        } else {
            res.status(404).send(`Product ${id} Not Found`);
        }
    } catch (error) {
        console.log("UPDATE PRODUCT", error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            res.status(404).send(`Product ${id} Not Found`);
        } else {
            await product.destroy();
            res.status(200).json({
                msg: "Product Deleted Correctly",
                product
            });
        };
    } catch (error) {
        console.log("DELETE PRODUCT", error);
        res.status(500).json({ msg: "Internal Server Error" });
    };
};