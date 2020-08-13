
const dotenv = require('dotenv');


dotenv.config();



const pgp = require('pg-promise')();
const db = pgp(process.env.CONECTION);

module.exports =db;