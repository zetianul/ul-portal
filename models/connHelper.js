'use strict'
const mysql = require('mysql');
const config = require('../config/default')

const pool = mysql.createPool(config.mysql)

module.exports = {
    mysql:pool
}