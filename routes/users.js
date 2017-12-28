const express = require('express');
const router = express.Router();

const userModel = require('../models/user')

/* GET users listing. */
router.post('/register', function(req, res) {
  let body = req.body | {};
  let user = new userModel();

  user.email = body.email;
  user.name = body.name;
  user.setPassword(user.password);
  user.save().then(doc => {
    res.status(201).send({
        name:doc.name
    }).catch(err=>{
      res.status(500).send(err.message)
    })
  })
});

module.exports = router;
