import { Request, Response } from "express"

export const getProducts = (req: Request, res: Response) => {
    res.status(200).json({
        msg: "GET Products"
    });
};

export const getProduct = (req: Request, res: Response) => {

    const { id } = req.params;

    res.status(200).json({
        msg: "GET Product",
        id: id
    });
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