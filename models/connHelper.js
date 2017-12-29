'use strict'
const mysql = require('mysql');
const config = require('../config/default')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const pool = mysql.createPool(config.mysql)

const conn = mongoose.createConnection(config.mongodb.url,{
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