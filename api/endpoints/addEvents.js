'use strict'

let router = require('express').Router();

const Event = require('../../models/events.js')

router.post('/', function(req, res) {
  Event.create(req.body)
    .then((event) => {
      event.save();
    })
    .then(() => {
      res.send('it worked')
    })
    .catch((err) => {
      console.log(err);
      res.send(err)
    })
})









module.exports = router;
