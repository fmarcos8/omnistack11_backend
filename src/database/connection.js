const knex = require('knex');
const config = require('../../knexfile');

const AMBIENT = process.env.NODE_ENV;

const connection = knex(config[AMBIENT]);

module.exports = connection;