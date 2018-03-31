class BaseDAO {
  constructor(collection) {
    this.collection = collection;
  }

  getData(query, offset, limit) {
    console.log('get data', query, offset, limit);
    if (!this.collection) {
      throw 'Contract violation';
    }
    query = query || {};
    return this.collection.find(query)
                    .skip(offset)
                    .limit(limit)
                    .exec();
  }

  insertData(query) {
    console.log('insert data', query);
    if (!this.collection) {
      throw 'Contract violation';
    }
    query = query || {};
    return this.collection.create(query);
  }
}

module.exports = BaseDAO;
