const db = require('../connection');

const getFavorites = () => {
  return db.query('SELECT * FROM favorites;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavorites };
