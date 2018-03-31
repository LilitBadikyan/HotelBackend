const DEFAULT_OFFSET_VALUE = 0;
const DEFAULT_LIMIT_VALUE = 20;

class Utility {

  static parseQuery(req, res, next) {
    console.log('PARSEQUERY', req.query.offset, req.query.limit);
    req.query.offset = parseInt(req.query.offset);
    if (!isFinite(req.query.offset)) {
      req.query.offset = DEFAULT_OFFSET_VALUE;
    }
    req.query.limit = parseInt(req.query.limit);
    if (!isFinite(req.query.limit)) {
      req.query.limit = DEFAULT_LIMIT_VALUE;
    }
    console.log('PARSEQUERY', req.query.offset, req.query.limit);
    next();
  }

}

module.exports = Utility;
