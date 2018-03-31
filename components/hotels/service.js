const HotelsDAO = require('./private/dao');

class HotelsService {

  getHotels(query, offset, limit) {
    return new Promise((resolve, reject) => {
      return HotelsDAO.getData(query, offset, limit).then(data => {
        return resolve(data);
      }).catch(err => {
        return reject({
          err: err
        });
      })
    })
  };

  getTownSuggestions(query, options) {
    options = options || {};
    query = query || {};
    return new Promise((resolve, reject) => {
      return HotelsDAO.getData({}, options.offset, options.limit).then(data => {
        let result = data.filter(item => {
          if (item.hotelTown.toLowerCase().startsWith(query.toLowerCase())) {
            return item;
          }
        })
        return resolve(result);
      }).catch(err => {
        return reject({
          err: err
        });
      })
    })
  };

  insertHotel(query, options) {
    options = options || {};
    return new Promise((resolve, reject) => {
      return HotelsDAO.insertData(query).then(data => {
        return resolve(data);
      }).catch(err => {
        return reject({
          err: err
        });
      })
    })
  };

}

module.exports = new HotelsService();
