'use strict'

let router = require('express').Router();

const Event = require('../../models/events.js');

router.patch('/', function(req, res) {
  Event.update({
    heading: req.body.heading,
    content: req.body.content
  }, {
    where: {
      id: req.body.id
    }
  })
  .then((results) => {
    console.log(req.body);
    res.send('it worked!')
  })
  .catch((err) => {
    console.log(err);
    res.send('oops')
  })
});

module.exports = router;
