'use strict'

let router = require('express').Router();

const Event = require('../../models/events.js')


router.get('/', (req, res) => {
  Event.findAll()
  .then((docs) => {
    res.send(docs)
  })
  .catch((err) => {
    res.send(err)
  })
})




module.exports = router;
