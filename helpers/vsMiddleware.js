'use strict'
const pool = require('../models/connHelper').mysql

function vs(req,res,next) {
    let ip = req.headers['x-forwarded-for'] || req.ip || req._remoteAddress || (req.connection && req.connection.remoteAddress) || '0.0.0.0';
    if (ip.substr(0, 7) === '::ffff:') {
        ip = ip.substr(7);
    }
    pool.queryAsync('insert into portal_event_stream (ip,label,detail) value (?,?,?)',[ip,'visit',req.url]).then(ret => {
        console.log(ret.message)
    }).catch(err => {
        console.log(err.message)
    })
    next()
}

module.exports = vs