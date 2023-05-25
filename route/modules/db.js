const neo4j = require('neo4j-driver')


const uri = 'bolt://';
const user = '';
const password = '';


const db = neo4j.driver(uri, neo4j.auth.basic(user, password))

module.exports = db;