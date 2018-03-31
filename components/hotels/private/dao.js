const mongoose = require('mongoose');
const dbConnection = require('./../../core/dbConnection');
const BaseDAO = require('./../../core/baseDao');

require('./model');
let hotelsCollection = dbConnection.model('hotels');

class HotelsDAO extends BaseDAO {
  constructor() {
    super(hotelsCollection);
  }
}

module.exports = new HotelsDAO();
