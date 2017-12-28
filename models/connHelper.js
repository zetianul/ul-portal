'use strict'
const mysql = require('mysql');
const config = require('../config/default')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const pool = mysql.createPool(config.mysql)

let conn = mongoose.createConnection(config.mongodb,{
    server: {
        socketOptions: {
            socketTimeoutMS: 300000,
            connectTimeoutMS: 300000
        }
    }
})

module.exports = {
    mysql:pool,
    mongoose:mongoose,
    conn:conn
}