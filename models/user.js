'use strict';
const mongoose = require('./connHelper').mongoose
const crypto = require('crypto')
const conn = require('./connHelper').conn
let Schema = mongoose.Schema;

let userSchema = new Schema({
    email:{type: String, lowercase: true, unique: true},
    name:String,
    hash:String,
    salt:String,
    role:{type:Number,default:1}
})

userSchema.methods.setPassword = function (pw) {
    this.salt = crypto.randomBytes(16).toString('hex')
    this.hash = crypto.pbkdf2Sync(pw,this.salt,1000,64,'sha512').toString('hex')
}

userSchema.methods.validPassword = function (pw) {
    let hash = crypto.pbkdf2Sync(pw,this.salt,1000,64,'sha512').toString('hex')
    return this.hash === hash;
}

module.exports = conn.model('users',userSchema)