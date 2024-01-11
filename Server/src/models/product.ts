import { DataTypes } from "sequelize";
import db from "../db/DBconnection";

const Product = db.define('Product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }, 
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false
});

export default Product;