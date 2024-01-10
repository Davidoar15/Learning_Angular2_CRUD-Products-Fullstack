import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const NAME = process.env.DBNAME || "DBNAME";
const USER = process.env.DBUSER || "DBUSER";
const PASSWORD = process.env.DBPASSWORD;

const sequelize = new Sequelize(NAME, USER, PASSWORD, {
    host: `localhost`,
    dialect: 'mysql',
    // logging: false
});

export default sequelize;