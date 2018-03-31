const HotelsApi = require('./../components/hotels/api');

class ApiV1 {
  initialize(app) {

    app.use('/api/hotels', HotelsApi);

    app.get('/', (req, res) => {
      return res.send('it works!');
    });
  }
}

module.exports = new ApiV1();
