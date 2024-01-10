import { Request, Response } from "express"
import Product from "../models/product";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const listProducts = await Product.findAll()

        listProducts 
        ? res.status(200).json(listProducts)
        : res.status(404).send("Products Not Found")
    } catch (error) {
        console.log("GET PRODUCTS", error)
        res.status(500).json({ msg: "Internal Server Error" });
    }
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
        res.status(500).json({ msg: "Internal Server Error" })
    }
};

export const postProduct = (req: Request, res: Response) => {
    const { body } = req;

    res.status(200).json({
        msg: "POST Product",
        body
    });
};

export const putProduct = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    res.status(200).json({
        msg: "UPDATE Product",
        id,
        body
    });
};

export const deleteProduct = (req: Request, res: Response) => {
    const { id } = req.params;

    res.status(200).json({
        msg: "DELETE Product",
        id: id
    });
};