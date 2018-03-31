const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let HotelsSchema = new Schema({
  hotelName: {
    type: String,
  },
  hotelTown: {
    type: String,
  },
  hotelImage: {
    type: String,
  },
})

module.exports = mongoose.model('hotels', HotelsSchema);
