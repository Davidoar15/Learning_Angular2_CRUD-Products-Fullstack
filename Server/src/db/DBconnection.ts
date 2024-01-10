import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const NAME = process.env.DB_NAME || "DBNAME";
const USER = process.env.DB_USER || "DBUSER";
const PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: `localhost`,
    dialect: 'mysql',
    // logging: false
});

export default sequelize;