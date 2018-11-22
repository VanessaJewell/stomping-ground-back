'use strict'

let router = require('express').Router();

const Event = require('../../models/events.js')


router.delete('/', function(req, res) {
  Event.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(() => {
      console.log(req.body);
      res.send('it worked')
    })
    .catch((err) => {
      console.log(err);
      res.send('oops, did not work')
    })
});


module.exports = router;
