const express = require('express');
const HotelsRouter = express.Router();
const HotelsService = require('./service');


HotelsRouter.get('/', (req, res) => {
  let query;
  if (req.query.hotelTown) {
    query = {hotelTown: req.query.hotelTown}
  } else {
    query = {}
  }
  HotelsService.getHotels(query, req.query.offset, req.query.limit).then(data => {
    return res.send(data);
  }).catch(err => {
    return res.send(err);
  })
});

HotelsRouter.get('/townsuggestions/', (req, res) => {
  HotelsService.getTownSuggestions(req.query.town, {offset: req.query.offset, limit: req.query.limit}).then(data => {
    return res.send(data);
  }).catch(err => {
    return res.send(err);
  })
});

HotelsRouter.post('/', (req, res) => {
  let hotel = {
    hotelName: req.body.hotelName,
    hotelTown: req.body.hotelTown,
    hotelImage: req.body.hotelImage,
  };
  HotelsService.insertHotel(hotel).then(data => {
    return res.send(data);
  }).catch(err => {
    return res.send(err);
  })
});

module.exports = HotelsRouter;
