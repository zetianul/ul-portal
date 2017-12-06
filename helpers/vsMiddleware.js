'use strict'
const pool = require('../models/connHelper').mysql

function vs(req,res,next) {
    let ip = req.headers['x-forwarded-for'] || req.ip || req._remoteAddress || (req.connection && req.connection.remoteAddress) || '0.0.0.0';
    if (ip.substr(0, 7) === '::ffff:') {
        ip = ip.substr(7);
    }
    let item = new Date().getTime()
    pool.queryAsync('insert into portal_event_stream (ip,`@timestamp`,label) value (?,?,?)',[ip,item,'visit']).then(ret => {
        console.log(ret.message)
    }).catch(err => {
        console.log(err.message)
    })
    next()
}

module.exports = vs