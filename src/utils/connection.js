import Sequelize from "sequelize";

const { CHAT_API_DB_URI } = process.env;

export default new Sequelize(CHAT_API_DB_URI);
