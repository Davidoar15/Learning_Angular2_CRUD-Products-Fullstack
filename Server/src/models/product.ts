import { DataTypes } from "sequelize";
import db from "../db/DBconnection";

const Product = db.define('Product', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    }, 
    stock: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Product;